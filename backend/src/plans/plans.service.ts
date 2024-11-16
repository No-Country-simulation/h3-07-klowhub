import { InjectModel } from '@nestjs/mongoose';
import { HttpException, Injectable } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { Plan, PlanDocument } from './models/plan.model';
import { Model } from 'mongoose';

@Injectable()
export class PlansService {
  constructor(@InjectModel(Plan.name) private userModel: Model<PlanDocument>) {}
  async create(createPlanDto: CreatePlanDto) {
    try {
      const newPlan =await new this.userModel(createPlanDto);
      return await newPlan.save();
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, 500);
    }
  }

  async findAll() {
    try {
      return await this.userModel.find();
    } catch (error) {
      
      throw new HttpException(error.message, 500);
      
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} plan`;
  }

  update(id: number, updatePlanDto: UpdatePlanDto) {
    return `This action updates a #${id} plan`;
  }

  remove(id: number) {
    return `This action removes a #${id} plan`;
  }
}
