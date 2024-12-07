import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';
import { UserResponseDto } from 'src/auth/dto/login-response-dto';
import { Sector } from './entities/sector.entity';
import { CreateSectorDto } from './dto/create-sector-dto';
import { Lesson, Moduls } from './entities/moduls.entity';
import { CreateModulDto } from './dto/create-modul.dto';
import { CreateLessonDto } from './dto/create-lesson.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
    @InjectRepository(Sector)
    private readonly sectorRepository: Repository<Sector>,
    @InjectRepository(Moduls)
    private modulsRepository: Repository<Moduls>,
    @InjectRepository(Lesson)
    private lessonRepository: Repository<Lesson>,
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
    } catch (error) {
      console.log(error);
    }
  }

  async addModules(
    courseId: number,
    modules: CreateModulDto[],
  ): Promise<Moduls[]> {
    const course = await this.courseRepository.findOne({
      where: { id: courseId },
      relations: ['moduls'],
    });

    if (!course) {
      throw new NotFoundException('Course not found');
    }

    const newModules = modules.map((modul) =>
      this.modulsRepository.create({ ...modul, courses: course }),
    );

    await this.modulsRepository.save(newModules);

    return newModules;
  }

  async addLessons(modulId: number, lesson: CreateLessonDto): Promise<Lesson> {
    const modul = await this.modulsRepository.findOne({
      where: { id: modulId },
      relations: ['Lesson'],
    });

    if (!modul) {
      throw new NotFoundException('Modul not found');
    }

    const newLesson = this.lessonRepository.create({
      ...lesson,
      modul,
    });

    await this.lessonRepository.save(newLesson);

    return newLesson;
  }

  async findAll() {
    try {
      return await this.courseRepository.find({
        relations: ['sector', 'moduls'],
        order: {
          id: 'DESC',
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: number) {
    const course = await this.courseRepository.findOne({
      where: { id },
      relations: ['sector'],
    });
    if (!course) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return course;
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
  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const course = await this.findOne(id);

    Object.assign(updateCourseDto);

    if (updateCourseDto.sectorId) {
      const sector = await this.findOneSector(updateCourseDto.sectorId);
      if (sector) {
        course.sector = sector;
      }
    }
    return await this.courseRepository.save(course);
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

  async findAllLessons() {
    try {
      return await this.lessonRepository.find();
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async findOneLesson(id: number) {
    try {
      return await this.lessonRepository.findOneBy({ id: id });
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async findAllModules() {
    try {
      return await this.modulsRepository.find({ relations: ['Lesson'] });
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async findOneModule(id: number) {
    try {
      return await this.modulsRepository.findOne({
        where: { id },
        relations: {
          Lesson: true,
        },
      });
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
