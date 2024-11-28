import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "./hooks";
import { logout, setCredentials } from "./userSlice";
import axios from "axios";
import { useState } from "react";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Replace this with your actual API call
      const response = await await axios.post(
        "https://klowhub.onrender.com/api/auth/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status >= 400) {
        throw new Error("Login failed");
      }

      dispatch(
        setCredentials({
          user: response.data,
          token: response.data.access_token,
        })
      );

      // Redirect based on user role
      const redirectPath = getRedirectPath(response.data.role);
      router.push(redirectPath);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const getRedirectPath = (role: string) => {
    switch (role) {
      case "superadmin":
        return "/superadmin";
      case "admin":
        return "/dashboard";
      case "seller":
        return "/seller-dashboard";
      default:
        return "/user-dashboard";
    }
  };

  return {
    user,
    isAuthenticated,
    login,
    logout: handleLogout,
    isLoading,
  };
};
