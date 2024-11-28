import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';
import { UserResponseDto } from 'src/auth/dto/login-response-dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
  ) {}

  async create(userId: UserResponseDto, createCourseDto: CreateCourseDto) {
    try {
      const { courseName } = createCourseDto;
      console.log(userId);
      // Crear una nueva instancia de curso
      const newCourse = this.courseRepository.create({
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
      }
      return await this.courseRepository.save(newCourse);
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      return await this.courseRepository.find();
    } catch (error) {
      console.log(error);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
