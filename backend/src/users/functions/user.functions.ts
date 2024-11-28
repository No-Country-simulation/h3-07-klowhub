import {
  BadRequestException,
  HttpException,
  NotFoundException,
} from '@nestjs/common';

import { Model } from 'mongoose';
import { UserDocument } from 'src/auth/models/user.model';
import { SellerDocument } from 'src/auth/models/seller.model';
import { PlanDocument } from 'src/plans/models/plan.model';
import { NotificationsService } from 'src/notifications/notifications.service';
import { CreateSellerDto } from '../dto/create-seller.dto';

export const findExistingUser = async (
  userId: string,
  userModel: Model<UserDocument>,
): Promise<UserDocument> => {
  const existingUser = await userModel.findById(userId);
  if (!existingUser) throw new NotFoundException('User not found');
  return existingUser;
};

export const findStarterPlan = async (
  planModel: Model<PlanDocument>,
): Promise<PlanDocument> => {
  const starterPlan = await planModel.findOne({ name: 'Starter' });
  if (!starterPlan) throw new NotFoundException('Starter plan not found');
  return starterPlan;
};

export const createNewSeller = async (
  userId: string,
  starterPlanId: string,
  sellerData: CreateSellerDto,
  sellerModel: Model<SellerDocument>,
): Promise<SellerDocument> => {
  const newSeller = new sellerModel({
    user: userId,
    plan: starterPlanId,
    profileName: sellerData.profileName,
    profileDescription: sellerData.profileDescription || null,
    sellerType: sellerData.sellerType,
    portfolioWebLink: sellerData.portfolioWebLink || null,
    receivePayments: sellerData.receivePayments,
    idImageFront: sellerData.idImageFront,
    idImageBack: sellerData.idImageBack,
    courses: [],
    applications: [],
    projects: [],
    totalSales: 0,
    totalRevenue: 0,
    isAuthorized: false,
  });

  return await newSeller.save();
};

export const notifyAdmins = async (
  notificationService: NotificationsService,
  userName: string,
  email: string,
  sellerData: CreateSellerDto,
): Promise<void> => {
  await notificationService.newAdminNotification(
    {
      userName,
      email: email,
      message: 'ha solicitado ser vendedor',
      type: 'Solicitud de vendedor',
    },
    `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h1 style="color: #4CAF50;">¡Nueva solicitud de vendedor!</h1>
      <p><strong>Perfil:</strong> ${sellerData.profileName}</p>
      <p><strong>Descripción:</strong> ${
        sellerData.profileDescription || 'No especificada'
      }</p>
      <p><strong>Tipo:</strong> ${sellerData.sellerType}</p>
      <p><strong>Portafolio:</strong> 
        <a href="${sellerData.portfolioWebLink}" style="color: #2196F3;">${
          sellerData.portfolioWebLink
        }</a>
      </p>
      <p><strong>Métodos de pago:</strong> ${sellerData.receivePayments}</p>
      <p><strong>Documentos de identificación:</strong></p>
      <ul>
        <li><a href="${
          sellerData.idImageFront
        }" style="color: #2196F3;">Frontal</a></li>
        <li><a href="${
          sellerData.idImageBack
        }" style="color: #2196F3;">Trasera</a></li>
      </ul>
      <p>
        <a href="http://http://localhost:3000/api/admin-users/authorize-seller?email=${email}&action=approve" 
           style="color: #4CAF50; text-decoration: none;">Autorizar</a> |
        <a href="http://http://localhost:3000/api/admin-users/authorize-seller?email=${email}&action=reject" 
           style="color: #F44336; text-decoration: none;">Denegar</a>
      </p>
      <hr style="border: none; border-top: 1px solid #ddd;" />
      <p>Por favor, revisa esta solicitud en el panel de administración.</p>
    </div>
    `,
  );
};
