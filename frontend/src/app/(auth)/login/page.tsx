"use client";
import Form from "@/components/form/Form";
import { RootState, useAppDispatch } from "@/stores/store";
import { loginUserState } from "@/stores/userSlice";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [loginError, setLoginError] = useState<string>("");
  const isLoading = useSelector((state: RootState) => state.user.loading);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await dispatch(loginUserState(data)).unwrap();
      router.push("/");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setLoginError("Credenciales invalidas.");
      console.log(error);
    }
  });
  return (
    <div className="bg-[url('/backgroundLogin.png')] w-screen h-[calc(1126px-309px)] bg-cover bg-no-repeat font-inter flex">
      <div className="w-1/2">
        <p className="font-semibold text-[54px] pl-12 pt-28">KlowHub</p>
      </div>
      <div className="w-1/2 h-full relative">
        <div className="absolute inset-0 bg-[#20222f23] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5.9px] "></div>
        <div className="relative h-full z-10 pl-[160px] pr-[168px]">
          <Form onSubmit={onSubmit}>
            <p className="font-bold">
              Bienvenido de nuevo. Inicia sesión para continuar creando y
              aprendiendo en KlowHub.
            </p>
            <section className="flex flex-col gap-3 px-[25px] ">
              <Input
                {...register("email", { required: true })}
                type="email"
                size="md"
                variant="flat"
                color="default"
                labelPlacement="inside"
                label="Email"
                radius="sm"
                isInvalid={errors.email ? true : false}
                errorMessage="Debe ingresar un Email"
              />

              <Input
                {...register("password", { required: true })}
                type="password"
                size="md"
                variant="flat"
                color="default"
                labelPlacement="inside"
                label="Contraseña"
                radius="sm"
                isInvalid={errors.password ? true : false}
                errorMessage="Debe ingresar un password"
              />
            </section>
            <section className="pl-5 text-red-500">
              {loginError !== "" && (
                <p className="text-sm">{loginError} Intente nuevamente.</p>
              )}
            </section>
            <section className="text-center">
              <p className="text-xs font-medium">
                Al registrarte, aceptas nuestras{" "}
                <Link href={"/"} className="text-primario300">
                  Condiciones de uso
                </Link>{" "}
                y nuestra{" "}
                <Link href={"/"} className="text-primario300">
                  Política de privacidad.
                </Link>
              </p>
              <Button
                color="secondary"
                size="lg"
                className="mt-4"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "iniciando sesión..." : "Login"}
              </Button>
            </section>
            <section className="flex flex-col items-center gap-4">
              <p>O continuar con</p>
              <div className="flex gap-6">
                <div className="rounded-full border border-white p-2">
                  <Image
                    src={"/githubwhite.png"}
                    alt="github-register"
                    width={26}
                    height={26}
                  />
                </div>
                <div className="rounded-full border border-white p-2">
                  <Image
                    src={"/facebookwhite.png"}
                    alt="facebook-register"
                    width={26}
                    height={26}
                  />
                </div>
                <div className="rounded-full border border-white p-2">
                  <Image
                    src={"/googlewhite.png"}
                    alt="google-register"
                    width={26}
                    height={26}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />{" "}
                <label className="font-bold text-sm">
                  Quiero recibir novedades y consejos de la plataforma
                </label>
              </div>
            </section>
            <section className="flex w-full justify-center gap-4 text-xs font-medium">
              <p>¿No tienes cuenta?</p>
              <Link href={"/register"} className="text-secundario400">
                Registrate
              </Link>
            </section>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
