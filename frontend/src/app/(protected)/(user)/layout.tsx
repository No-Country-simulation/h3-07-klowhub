// app/(protected)/(admin)/layout.tsx
"use client";

import { useSelector } from "react-redux";
import { redirect } from "next/navigation";
import { RootState } from "@/stores/store";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useSelector((state: RootState) => state.user);

  if (user.role !== "user") {
    redirect("/"); // or wherever you want to redirect non-admins
  }

  return <>{children}</>;
}
