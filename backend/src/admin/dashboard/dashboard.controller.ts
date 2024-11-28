import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Dashboard') // Grupo para Swagger
@ApiBearerAuth()
@UseGuards(AuthGuard, RolesGuard)
@Roles('superAdmin', 'admin')
@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @ApiOperation({
    summary: 'Obtener todos los usuarios con detalles de planes',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de todos los usuarios con información adicional.',
  })
  @ApiResponse({ status: 500, description: 'Error interno del servidor.' })
  @Get()
  @Get()
  findAll() {
    return this.dashboardService.findAll();
  }

  @ApiOperation({ summary: 'Estadísticas generales de usuarios' })
  @ApiResponse({
    status: 200,
    description: 'Estadísticas de usuarios totales y activos.',
    schema: {
      example: { totalUsers: 150, activeUsers: 120 },
    },
  })
  @ApiResponse({ status: 500, description: 'Error interno del servidor.' })
  @Get('users/stats')
  getUsersStats() {
    return this.dashboardService.getTotalUsers();
  }

  @ApiOperation({ summary: 'Nuevos usuarios registrados en un periodo' })
  @ApiQuery({
    name: 'start',
    description: 'Fecha de inicio (formato ISO 8601)',
    required: true,
  })
  @ApiQuery({
    name: 'end',
    description: 'Fecha de fin (formato ISO 8601)',
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'Número de usuarios registrados en el periodo.',
    schema: {
      example: { newUsers: 25 },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Parámetros de consulta inválidos.',
  })
  @ApiResponse({ status: 500, description: 'Error interno del servidor.' })
  @Get('users/new')
  getNewUsers(@Query('start') start: string, @Query('end') end: string) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    return this.dashboardService.getNewUsersByPeriod(startDate, endDate);
  }

  @ApiOperation({ summary: 'Estadísticas de ventas' })
  @ApiResponse({
    status: 200,
    description: 'Total de ventas y ganancias.',
    schema: {
      example: { totalRevenue: 5000, totalSales: 350 },
    },
  })
  @ApiResponse({ status: 500, description: 'Error interno del servidor.' })
  @Get('sales/stats')
  getSalesStats() {
    return this.dashboardService.getSalesStats();
  }

  @ApiOperation({
    summary: 'Estadísticas de contenido (cursos y aplicaciones)',
  })
  @ApiResponse({
    status: 200,
    description: 'Número total de cursos y aplicaciones.',
    schema: {
      example: { courses: 10, apps: 5 },
    },
  })
  @ApiResponse({ status: 500, description: 'Error interno del servidor.' })
  @Get('content/stats')
  getContentStats() {
    return this.dashboardService.getContentStats();
  }
}
