import axios from "axios";
export const getProfile = async () => {
  const getCookie = (name: string): string | null => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
    return null;
  };
  const token = getCookie("auth_token");
  const data = await axios.get("https://klowhub.onrender.com/api/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(data);
};
