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

  @Get('sectors')
  findAllSectors() {
    return this.coursesService.findAllSectors();
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
