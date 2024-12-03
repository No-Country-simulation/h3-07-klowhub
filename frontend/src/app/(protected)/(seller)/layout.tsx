import ClientProvider from "@/app/ClientProvider";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function SellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const userRole = (await cookieStore).get("user_role")?.value;

  if (userRole !== "seller") {
    redirect("/update-to-seller");
  }

  return <ClientProvider>{children}</ClientProvider>;
}
