import Header from "@/components/layout/Header";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ClientProvider from "../ClientProvider";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const token = (await cookieStore).get("auth_token");

  // Si no hay token, redirigir al login
  if (!token) {
    redirect("/login");
  }

  return (
    <ClientProvider>
      <Header />
      <main className="px-5 pt-10">{children}</main>
    </ClientProvider>
  );
}
