import { getServerSideToken } from "@/utils/authentications";

export const getUsers = async () => {
  const token = await getServerSideToken();
  try {
    const url = `${process.env.NEXT_PUBLIC_API_ROOT}/dashboard/users/stats`;
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });
    if (res.status !== 200) {
      throw new Error("Error al obtener las estadísticas");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
