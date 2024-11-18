// ClientLayout.tsx
"use client";

import { Provider, useDispatch, useSelector } from "react-redux";
import { RootState, store } from "@/stores/store";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useEffect } from "react";
import { restoreState } from "@/stores/userSlice";

const LayoutContent = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const isLoggedIn = !!user.access_token; // Check if user has a token

  useEffect(() => {
    dispatch(restoreState());
  }, [dispatch]);

  return (
    <>
      {/* Show header only if user is logged in */}
      {isLoggedIn && <Header />}
      <main>{children}</main>
      {/* Show footer only if user is NOT logged in */}
      {!isLoggedIn && <Footer />}
    </>
  );
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <LayoutContent>{children}</LayoutContent>
    </Provider>
  );
}