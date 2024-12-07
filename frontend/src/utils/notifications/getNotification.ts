import axios from "axios";
import { getServerSideToken } from "../authentications";

export const getNotifications = async () => {
  const token = getServerSideToken();
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
    console.log("asdasd", response);
    return response.data;
  } catch (error) {
    console.error("Error al obtener notificaciones:", error);
    return [];
  }
};

import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const notifications = await getNotifications();

  return {
    props: {
      notifications,
    },
  };
};
