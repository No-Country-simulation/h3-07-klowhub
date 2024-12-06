"use server";
import axios from "axios";
import { FieldValues } from "react-hook-form";
import Cookies from "js-cookie";
import { cookies } from "next/headers";

export const registerUser = async (datos: FieldValues) => {
  try {
    const respuesta = await axios.post(
      `${process.env.NEXT_PUBLIC_API_ROOT}/auth/register`,
      {
        username: datos.name,
        password: datos.password,
        email: datos.email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (respuesta.status === 201) {
      // With axios, the response data is already parsed to JSON
      // so we don't need to call .json()

      return respuesta.data;
    } else {
      throw new Error("Registro fallido");
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error al registrar:", error.response.data.message);
    throw error;
  }
};

export const loginUser = async (datos: FieldValues) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_ROOT}/auth/login`,
      {
        email: datos.email,
        password: datos.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 201) {
      // With axios, the response data is already parsed to JSON
      // so we don't need to call .json()
      localStorage.setItem("userState", JSON.stringify(response.data));
      Cookies.set("userState", JSON.stringify(response.data), { expires: 7 }); // expires in 7 days
      return response.data;
    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export const getServerSideToken = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token");
  return token?.value;
};
