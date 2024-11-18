// layout.tsx (Server Component)
import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./clientLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

export { Metadata };
