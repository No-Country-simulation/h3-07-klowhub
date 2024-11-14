import { Controller, Get, Post, Body, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { RequestWithUser } from './interfaces/request-with-user.interface';
import { ResetEmail } from './dto/recovery-email.dto';
import { ValidateCode } from './dto/validate-code.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { RolesGuard } from './guard/roles.guard';
import { Roles } from './decorators/roles.decorator';
import { AuthGuard } from './guard/auth.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
  })
  @ApiResponse({ status: 409, description: 'User already exists.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  @Post()
  create(@Body() createAuthDto: CreateUserDto) {
    return this.authService.create(createAuthDto);
  }

  @ApiOperation({ summary: 'Login user and return JWT token' })
  @ApiResponse({
    status: 200,
    description: 'User successfully logged in.',
  })
  @ApiResponse({ status: 401, description: 'Invalid credentials.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    return await this.authService.login(loginUserDto);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Verify user JWT token' })
  @ApiResponse({ status: 200, description: 'Token successfully verified.' })
  @ApiResponse({ status: 401, description: 'Invalid token or unauthorized.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  @Get('verify')
  async verify(@Req() request: RequestWithUser) {
    return this.authService.verify(request);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Send code to user' })
  @ApiResponse({ status: 200, description: 'Code successfully send.' })
  @ApiResponse({ status: 401, description: 'Invalid code' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  @Get('verifyemail')
  async verifyEmail(@Req() request: RequestWithUser) {
    return this.authService.verifyEmail(request);
  }

  @ApiOperation({ summary: 'Send a recovery email for password reset' })
  @ApiResponse({ status: 200, description: 'Recovery email sent.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  @Post('forgotpassword')
  async forgotPassword(@Body() email: ResetEmail) {
    return this.authService.forgotPassword(email);
  }

  @Post('validatecode')
  @ApiOperation({ summary: 'Validate recovery code' })
  @ApiResponse({ status: 200, description: 'Recovery code is valid.' })
  @ApiResponse({ status: 400, description: 'Invalid recovery code.' })
  @ApiBody({ type: ValidateCode })
  @Post('validatecode')
  async validateCode(@Body() emailCode: ValidateCode) {
    return this.authService.validateRecoveryCode(emailCode);
  }
  
  @ApiOperation({ summary: 'Reset password' })
  @ApiResponse({ status: 200, description: 'Password updated successfully.' })
  @ApiResponse({ status: 404, description: 'Invalid email.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  @ApiBody({ type: UpdateAuthDto })
  @Post('resetpassword')
  async resetPassword(@Body() resetPassword: UpdateAuthDto) {
    return this.authService.resetPassword(resetPassword);
  }

}
