"use client";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/stores/store";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  if (!isAuthenticated) {
    router.push("/login");
    return null;
  }

  return <>{children}</>;
}
