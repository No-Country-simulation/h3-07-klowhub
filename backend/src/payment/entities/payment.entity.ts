import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Schema } from '@nestjs/mongoose';


export enum PaymentMethod{
    STRIPE ='stripe',
    BITCOIN='bicoint',
}

export enum PymentStatus{
    PENDING='pendind',
    SUCCES='succes',
    FAILED='failed',

}

@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column({type: 'enum', enum:PaymentMethod})
  @IsNotEmpty()
  @IsEnum(PaymentMethod)
  method:PaymentMethod;



  @Column({type:'enum', enum:PymentStatus})
  @IsNotEmpty()
  @IsEnum(PymentStatus)
  status:PymentStatus

  @Column({type:'decimal', precision:10, scale:2})
  @IsNotEmpty()
  @IsNumber()
  amoun:number;

  @Column({type:'varchar', length:255})
  @IsNotEmpty()
  @IsString()
  description:string;

  @Column({type:'varchar', nullable:true})
  @IsString()
  pymentGatewayResponse?:string
  
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

}
