import Footer from "@/components/layout/Footer";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ClientProvider from "../ClientProvider";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const token = (await cookieStore).get("auth_token");
  const rol = (await cookieStore).get("user_rol");

  // Si el usuario ya está autenticado, redirigir a su dashboard
  if (token) {
    switch (rol?.value) {
      case "admin":
        redirect("/admin-dashboard");
        break;
      case "user":
        redirect("/user-dashboard");
        break;
      case "seller":
        redirect("/seller-dashboard");
      default:
        break;
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <ClientProvider>
        <main className="flex-grow">{children}</main>
        <Footer />
      </ClientProvider>
    </div>
  );
}
