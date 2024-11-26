// app/(protected)/(admin)/layout.tsx
"use client";

import { useSelector } from "react-redux";
import { redirect } from "next/navigation";
import { RootState } from "@/stores/store";
import Breadcrumb from "@/components/layout/components/Breadcrumb";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useSelector((state: RootState) => state.auth);

  if (user.user?.role !== "admin") {
    redirect("/"); // or wherever you want to redirect non-admins
  }

  return (
    <>
      <Breadcrumb />
      {children}
    </>
  );
}
