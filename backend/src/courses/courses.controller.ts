import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { CreateSectorDto } from './dto/create-sector-dto';
import { IdValidationPipe } from 'src/common/pipes/id-validation/id-validation/id-validation.pipe';
import { CreateModulDto } from './dto/create-modul.dto';
import { CreateLessonDto } from './dto/create-lesson.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @UseGuards(AuthGuard, RolesGuard)
  //@Roles('seller')
  @Post()
  create(@Body() createCourseDto: CreateCourseDto, @Req() request) {
    const user = request.user;
    return this.coursesService.create(user, createCourseDto);
  }

  @Post(':id/modules')
  async addModules(
    @Param('id', IdValidationPipe) courseId: number,
    @Body() modules: CreateModulDto[],
  ) {
    return this.coursesService.addModules(courseId, modules);
  }

  @Get('modules')
  findAllModules() {
    return this.coursesService.findAllModules();
  }

  @Get('modules/:id')
  findOneModule(@Param('id', IdValidationPipe) id: string) {
    return this.coursesService.findOneModule(+id);
  }
  @Post('modules/:id/lessons')
  async addLessons(
    @Param('id', IdValidationPipe) modulId: number,
    @Body() lessons: CreateLessonDto,
  ) {
    return this.coursesService.addLessons(modulId, lessons);
  }
  @Get('sectors')
  findAllSectors() {
    return this.coursesService.findAllSectors();
  }

  @Get('lessons')
  findAllLessons() {
    return this.coursesService.findAllLessons();
  }

  @Get('lessons/:id')
  findOneLesson(@Param('id', IdValidationPipe) id: string) {
    return this.coursesService.findOneLesson(+id);
  }

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', IdValidationPipe) id: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    return this.coursesService.update(+id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(+id);
  }

  @Post('create-sector')
  createSector(@Body() createSectorDto: CreateSectorDto) {
    return this.coursesService.createSector(createSectorDto);
  }
}
