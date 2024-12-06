// app/(protected)/(admin)/layout.tsx
import Breadcrumb from "@/components/layout/components/Breadcrumb";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const userRole = (await cookieStore).get("user_role")?.value;
  console.log(userRole);
  if (userRole !== "admin") {
    redirect("/unauthorized");
  }

  return (
    <>
      <Breadcrumb />
      {children}
    </>
  );
}
