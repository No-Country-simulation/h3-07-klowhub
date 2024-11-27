import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment, PaymentMethod, PaymentStatus } from './entities/payment.entity';
import Stripe from 'stripe';

@Injectable()
export class PaymentService {
  private readonly stripe: Stripe;

  constructor(
    @InjectRepository(Payment) private readonly paymentRepository: Repository<Payment>,
  ) {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2024-11-20.acacia',
    });
  }

  async createPayment(method: PaymentMethod, amount: number, description: string): Promise<Payment> {
    if (amount <= 0) {
      throw new BadRequestException('Amount must be greater than zero.');
    }

    const payment = this.paymentRepository.create({
      method,
      amount,
      description,
    });

    return this.paymentRepository.save(payment);
  }

  async processStripePayment(paymentId: string, token: string): Promise<Payment> {
    const payment = await this.paymentRepository.findOne({ where: { id: paymentId } });

    if (!payment || payment.method !== PaymentMethod.STRIPE) {
      throw new BadRequestException('Invalid payment or method.');
    }

    try {
      const charge = await this.stripe.charges.create({
        amount: Math.round(payment.amount * 100), // Stripe expects amounts in cents
        currency: 'usd',
        description: payment.description,
        source: token,
      });

      payment.status = PaymentStatus.COMPLETED;
      payment.paymentGatewayResponse = JSON.stringify(charge);
    } catch (error) {
      payment.status = PaymentStatus.FAILED;
      payment.paymentGatewayResponse = JSON.stringify(error.message);
    }

    return this.paymentRepository.save(payment);
  }

  async processBitcoinPayment(paymentId: string): Promise<Payment> {
    const payment = await this.paymentRepository.findOne({ where: { id: paymentId } });

    if (!payment || payment.method !== PaymentMethod.BITCOIN) {
      throw new BadRequestException('Invalid payment or method.');
    }

    // Simulate Bitcoin payment process
    payment.status = PaymentStatus.COMPLETED;
    payment.paymentGatewayResponse = 'Bitcoin payment processed successfully';

    return this.paymentRepository.save(payment);
  }
}
