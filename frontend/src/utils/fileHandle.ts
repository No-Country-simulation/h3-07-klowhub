import axios from "axios";

export const HandleFileUpload = async (formData: FormData) => {
  try {
    if (!process.env.NEXT_PUBLIC_API_ROOT) {
      throw new Error("API root URL is not defined");
    }

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_ROOT}/images/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.status >= 200) {
      return response.data;
    } else {
      throw new Error("Error al subir el archivo");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || "Error al subir el archivo"
      );
    }
    throw error;
  }
};
