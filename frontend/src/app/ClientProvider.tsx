// Remove "use client" if you don't need client-side features
"use client";
import { Provider } from "react-redux";
import { store } from "@/stores/store";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
