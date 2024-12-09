import axios, { AxiosError } from "axios";
import { getServerSideToken } from "../authentications";
import { Module } from "@/app/(protected)/(seller)/crear-curso/NewCourseForm";

interface Inputs {
  courseName: string;
  courseType: string;
  courseDescription: string;
  coursePrice: number;
  courseLevel: string;
  platform: string;
  language: string;
  pilar: string;
  hashtags: string[];
  contentTypes: string;
  requirements: string;
  tools: string[];
  functionalities: string[];
  whatYouWillLearn: string;
  benefits: string[];
  coverImageUrl: string;
  sectorId: number;
}

/* const getAuthToken = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
}; */

export const newCourse = async (data: Inputs) => {
  const token = await getServerSideToken();
  try {
    const datos = await axios.post(
      `${process.env.NEXT_PUBLIC_API_ROOT}/courses`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return datos;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 401)
        console.log("Error de autorización. Verificar Token");
      if (axiosError.response?.status === 400) {
        return axiosError.response;
      }
    }
  }
};

export const getCourses = async () => {
  const token = await getServerSideToken();
  if (!token) {
    throw new Error("No token found");
  }
  try {
    const datos = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ROOT}/courses`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (datos.status !== 200) {
      throw new Error("Error al obtener los cursos");
    }

    if (datos.status === 200) {
      return datos;
    }
  } catch (error) {
    console.log(error);
  }
};

export const newModule = async ({
  id,
  data,
}: {
  id: number;
  data: Module[];
}) => {
  const token = await getServerSideToken();
  try {
    const datos = await axios.post(
      `${process.env.NEXT_PUBLIC_API_ROOT}/courses/${id}/modules`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (datos.status !== 201) {
      throw new Error("Error al crear el módulo");
    }

    if (datos.status === 201) {
      return datos;
    }
  } catch (error) {
    console.log(error);
  }
};
