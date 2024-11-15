import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './models/user.model';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dto/login-user.dto';
import { UserResponseDto } from './dto/login-response-dto';
import { MailerService } from '@nestjs-modules/mailer';
import { v4 as uuidv4 } from 'uuid';
import { EmailService } from 'src/email/email.service';
import { ResetEmail } from './dto/recovery-email.dto';
import { ValidateCode } from './dto/validate-code.dto';
import { ValidateEmailCode } from './dto/validate-emailCode';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly jwtService: JwtService,
    private readonly mailService: MailerService,
    private readonly emailService: EmailService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
      const userFound = await this.userModel.findOne({
        email: createUserDto.email,
      });
      if (userFound) {
        throw new HttpException('User already exists', 409);
      }
      const newUser = await this.userModel.create({
        ...createUserDto,
        password: hashedPassword,
      });
      return await newUser.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async login(loginUserDto: LoginUserDto): Promise<UserResponseDto> {
    try {
      const user = await this.userModel.findOne({ email: loginUserDto.email });
      if (!user) {
        throw new UnauthorizedException('Invalid credentials');
      }

      const isPasswordMatch = await bcrypt.compare(
        loginUserDto.password,
        user.password,
      );
      if (!isPasswordMatch) {
        throw new UnauthorizedException('Invalid credentials');
      }

      const payload = {
        _id: user.id,
        email: user.email,
        username: user.username,
        role: user.role,
      };
      const token = await this.jwtService.signAsync(payload);

      return {
        access_token: token,
        _id: user.id,
        role: user.role,
        email: user.email,
        username: user.username,
        profileImage: user.profileImage,
      };
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async verify(request: any) {
    try {
      //console.log(request.headers.autshorization, 'valido desde el front');
      const authHeader = request.headers.authorization;
      if (!authHeader) {
        throw new UnauthorizedException('Unauthorized');
      }

      const token = authHeader.split(' ')[1];
      if (!token) {
        throw new UnauthorizedException('Unauthorized');
      }

      const decodedToken = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });
      const userFound = await this.userModel.findOne({ _id: decodedToken._id });

      if (!userFound) {
        throw new UnauthorizedException('Unauthorized');
      }

      return {
        _id: userFound._id,
        email: userFound.email,
        role: userFound.role,
        name: userFound.username,
      };
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async sendCodeVerifyEmail(request: any) {
    try {
      const user = await this.userModel.findOne({ email: request.user.email });
      if (!user) {
        throw new HttpException('Invalid code', 401);
      }
      const verifyEmailCode = uuidv4().substring(0, 4);

      user.emailVerificationToken = verifyEmailCode;
      await user.save();

      await this.emailService.sendVerificationEmail(
        request.user.email,
        verifyEmailCode,
      );
      return {
        message: 'Email sent',
      };
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async validateCodeFromEmail(request: any, code: ValidateEmailCode) {
    try {
      const user = await this.userModel.findOne({
        email: request.user.email,
      });
      if (!user) {
        throw new HttpException('Invalid code', 401);
      }
      if (user.emailVerificationToken !== code.code) {
        throw new HttpException('Invalid code', 401);
      }

      user.isEmailVerified = true;
      user.emailVerificationToken = '';
      await user.save();

      return {
        message: 'Email verified',
      };
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
  async forgotPassword(email: ResetEmail) {
    try {
      const recoveryCode = uuidv4().substring(0, 6);
      const user = await this.userModel.findOne({ email: email.email });
      if (!user) {
        throw new HttpException('Wrong Email', 404);
      }

      const res = await this.emailService.sendRecoveryEmail(
        email.email,
        recoveryCode,
      );

      user.recoveryCode = recoveryCode;
      await user.save();
      return {
        message: 'Correo de recuperación enviado',
      };
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, 500);
    }
  }

  async validateRecoveryCode(emailCode: ValidateCode) {
    const { email, code } = emailCode;
    const user = await this.userModel.findOne({
      email,
      recoveryCode: code,
    });
    if (!user) {
      throw new HttpException('Invalid recovery code', 400);
    }
    if (user.recoveryCode !== emailCode.code) {
      throw new HttpException('Invalid recovery code', 400);
    }

    return {
      message: 'Código de recuperación válido',
    };
  }

  async resetPassword(updateAuthDto: UpdateAuthDto) {
    try {
      const user = await this.userModel.findOne({ email: updateAuthDto.email });
      if (!user) {
        throw new HttpException('Invalid email', 404);
      }

      const hashedPassword = await bcrypt.hash(updateAuthDto.password, 10);
      user.password = hashedPassword;
      user.recoveryCode = '';
      await user.save();

      return {
        message: 'Contraseña actualizada',
      };
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
