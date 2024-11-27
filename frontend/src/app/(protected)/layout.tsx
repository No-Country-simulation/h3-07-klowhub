import Header from "@/components/layout/Header";
import AuthCheck from "./ClientProvider";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthCheck>
      <Header />
      <main className="px-5 pt-10">{children}</main>
    </AuthCheck>
  );
}
