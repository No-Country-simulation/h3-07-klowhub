import { Inputs } from "@/app/(protected)/(user)/up-to-seller/components/Form";
import axios from "axios";

const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
};
const token = getCookie("auth_token");
export const getProfile = async () => {
  const data = await axios.get(`${process.env.NEXT_PUBLIC_API_ROOT}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(data);
};

export const upgradeUser = async (data: Inputs) => {
  const result = await axios.post(
    process.env.NEXT_PUBLIC_API_ROOT + "/users/upgrade-user-to-seller",
    {
      profileName: data.name,
      profileDescription: data.description,
      sellerType: data.sellerType,
      portfolioWebLink: data.portfolio,
      receivePayments: data.preferedPaymentMethod,
      idImageFront: "",
      idImageBack: "",
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return result;
};
