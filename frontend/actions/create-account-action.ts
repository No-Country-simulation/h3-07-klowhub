/* "use server";

import { registerSchema } from "@/schemas";

export async function registerFn(formData: FormData) {
  const registerData = {
    email: formData.get("email"),
    password: formData.get("password"),
    password_confirmation: formData.get("password_confirmation"),
    username: formData.get("name"),
  };
  console.log(registerData);

  //validar
  const register = registerSchema.safeParse(registerData);
  console.log(register);

  const errors = register.error?.errors.map((error) => error.message);
  console.log(errors);
  console.log(register);
  if (!register.success) {
    return {};
  }
  const url = `http://localhost:3000/api/auth/register`;

  const req = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: register.data.email,
      username: register.data.name,
      password: register.data.password,
    }),
  });
  const json = await req.json();
  console.log(json);
}
 */