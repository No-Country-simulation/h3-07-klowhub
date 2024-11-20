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

@UseGuards(AuthGuard, RolesGuard)
@Roles('superAdmin', 'admin')
@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  findAll() {
    return this.dashboardService.findAll();
  }

  @Get('users/stats')
  getUsersStats() {
    return this.dashboardService.getTotalUsers();
  }

  @Get('users/new')
  getNewUsers(@Query('start') start: string, @Query('end') end: string) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    return this.dashboardService.getNewUsersByPeriod(startDate, endDate);
  }

  @Get('sales/stats')
  getSalesStats() {
    return this.dashboardService.getSalesStats();
  }

  @Get('content/stats')
  getContentStats() {
    return this.dashboardService.getContentStats();
  }
}
