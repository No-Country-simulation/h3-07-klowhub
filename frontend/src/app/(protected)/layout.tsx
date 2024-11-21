"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/stores/store";
import Header from "@/components/layout/Header";
import { Suspense } from "react";
import dynamic from "next/dynamic";

function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  if (!isAuthenticated) {
    router.push("/login");
    return null;
  }

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="px-5">{children}</main>
    </>
  );
}
export default dynamic(() => Promise.resolve(ProtectedLayout), {
  ssr: false,
});
