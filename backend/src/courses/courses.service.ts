import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';
import { UserResponseDto } from 'src/auth/dto/login-response-dto';
import { Sector } from './entities/sector.entity';
import { CreateSectorDto } from './dto/create-sector-dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
    @InjectRepository(Sector)
    private readonly sectorRepository: Repository<Sector>,
  ) {}

  async create(userId: UserResponseDto, createCourseDto: CreateCourseDto) {
    try {
      const { courseName } = createCourseDto;
      const sector = await this.findOneSector(createCourseDto.sectorId);

      return this.courseRepository.save({
        ...createCourseDto,
        sector,
        ownerId: userId._id,
        ownerEmail: userId.email,
      });
      /* const newCourse = this.courseRepository.create({
        courseName,
        ownerId: userId._id,
        ownerEmail: userId.email,
        isActivated: true,
        pendingApproval: true,
        courseType: 'course',
        courseLevel: 'beginner',
        language: 'English',
      });
      if (!newCourse) {
        return { message: 'Error creating course' };
      } */
      // return await this.courseRepository.save(newCourse);
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      return await this.courseRepository.find({
        relations: ['sector'],
        order: {
          id: 'DESC',
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  async findOneSector(id: number) {
    try {
      const result = await this.sectorRepository.findOneBy({ id: id });
      if (!result) {
        const errors: string[] = [];
        errors.push(`Category with id ${id} not found`);
        throw new NotFoundException(errors);
      }
      return result;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }

  async createSector(createSectorDto: CreateSectorDto) {
    try {
      const sector = new Sector();
      sector.name = createSectorDto.name;

      return await this.sectorRepository.save(sector);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async findAllSectors() {
    try {
      return await this.sectorRepository.find();
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
