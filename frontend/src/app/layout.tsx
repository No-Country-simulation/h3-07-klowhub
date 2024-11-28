"use client";
import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/stores/store";
import dynamic from "next/dynamic";

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="text-white m-0 p-0 min-h-screen">
      <title>KlowHub</title>
      <body className="bg-gradient-to-tr from-[#34395C]  via-[#181941] to-[#1B1B1F]">
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
export default dynamic(() => Promise.resolve(RootLayout), {
  ssr: false,
});

export { Metadata };
