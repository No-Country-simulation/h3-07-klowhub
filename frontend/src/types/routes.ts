// types/routes.ts
export const PUBLIC_ROUTES = ["/login", "/register"] as const;
export const PROTECTED_ROUTES = ["/dashboard", "/profile"] as const;

export type PublicRoute = (typeof PUBLIC_ROUTES)[number];
export type ProtectedRoute = (typeof PROTECTED_ROUTES)[number];
