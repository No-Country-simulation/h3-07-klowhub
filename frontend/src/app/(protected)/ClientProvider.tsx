"use client";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/stores/store";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const user = useSelector((state: RootState) => state.auth);
  console.log(isAuthenticated);

  const router = useRouter();

  if (!isAuthenticated) {
    router.push("/login");
    return null;
  }

  if (user.user?.role === "user") {
    router.push("/user-dashboard");
  }
  if (user.user?.role === "seller") {
    router.push("/seller-dashboard");
  }

  return <>{children}</>;
}
