import { Controller, Post, Body, Param } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentMethod } from './entities/payment.entity';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  async createPayment(
    @Body('method') method: PaymentMethod,
    @Body('amount') amount: number,
    @Body('description') description: string,
  ) {
    return this.paymentService.createPayment(method, amount, description);
  }

  @Post(':id/stripe')
  async processStripe(
    @Param('id') paymentId: string,
    @Body('token') token: string,
  ) {
    return this.paymentService.processStripePayment(paymentId, token);
  }

  @Post(':id/bitcoin')
  async processBitcoin(@Param('id') paymentId: string) {
    return this.paymentService.processBitcoinPayment(paymentId);
  }
}
