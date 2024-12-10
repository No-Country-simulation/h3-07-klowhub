// src/utils/cookies.ts
import Cookies from "js-cookie";

export const COOKIE_NAMES = {
  USER: "user_data",
  TOKEN: "auth_token",
  ROLE: "user_role",
  SESSION: "session",
} as const;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setCookies = (userData: any, token?: string) => {
  Cookies.set(COOKIE_NAMES.USER, JSON.stringify(userData), { expires: 7 }); // 7 days
  Cookies.set(COOKIE_NAMES.TOKEN, token || "", { expires: 7 });
  Cookies.set(COOKIE_NAMES.ROLE, userData.role, { expires: 7 });
  Cookies.set(COOKIE_NAMES.SESSION, userData._id, {
    expires: 7,
    path: "/",
    sameSite: "strict",
  });
};

export const clearCookies = () => {
  Cookies.remove(COOKIE_NAMES.USER);
  Cookies.remove(COOKIE_NAMES.TOKEN);
  Cookies.remove(COOKIE_NAMES.ROLE);
  Cookies.remove(COOKIE_NAMES.SESSION);
};

export const getUserFromCookies = () => {
  const userCookie = Cookies.get(COOKIE_NAMES.USER);
  return userCookie ? JSON.parse(userCookie) : null;
};
