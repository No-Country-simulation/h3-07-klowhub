import axios from "axios";
import { getServerSideToken } from "../authentications";

export const getNotifications = async () => {
  const token = await getServerSideToken();
  if (!token) {
    throw new Error("No token found");
  }
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ROOT}/notifications`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status !== 200) {
      throw new Error("Error al obtener las notificaciones");
    }
    return response.data;
  } catch (error) {
    console.error("Error al obtener notificaciones:", error);
    return [];
  }
};

import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  const notifications = await getNotifications();

  return {
    props: {
      notifications: JSON.parse(JSON.stringify(notifications)),
    },
  };
};
