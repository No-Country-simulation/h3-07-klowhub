import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { AdminUsersService } from './admin-users.service';
import { CreateAdminUserDto } from './dto/create-admin-user.dto';
import { UpdateAdminUserDto } from './dto/update-admin-user.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
@UseGuards(AuthGuard, RolesGuard)
@Roles('superAdmin', 'admin')
@Controller('admin-users')
export class AdminUsersController {
  constructor(private readonly adminUsersService: AdminUsersService) {}


  @Post('deactivate-inactive-users')
  deactivateInactiveUsers(@Query('months') months: string) {
    const monthsNumber = parseInt(months, 10) || 3;
    return this.adminUsersService.deactivateInactiveUsers(monthsNumber);
  }

}
