"use client";
import AdminCard from "@/components/cards/AdminCard";
import ContainerCard from "@/components/cards/ContainerCard";
import DashCard from "@/components/cards/DashCard";
import { RootState } from "@/stores/store";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Sobre from "./components/sobre";
import Notifications from "./components/notifications";

enum Role {
  admin = "Administrador",
  user = "Explorador",
  seller = "Vendedor",
  superadmin = "Super Administrador",
}

export default function ProfilePage() {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useSelector((state: RootState) => state.auth);
  const [profileImage, setProfileImage] = useState(
    user?.profileImage || "/assets/avatars/foto1.png"
  );
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);

    const formData = new FormData();
    formData.append("img", file);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ROOT}/users/imageprofile`,
        {
          method: "PATCH",
          body: formData,
          headers: {
            Authorization: `Bearer ${user?.access_token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update profile image");
      }

      const data = await response.json();
      setProfileImage(data.imageUrl);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsUploading(false);
    }
  };
  return (
    user && (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-12">
        <ContainerCard sectionClass="col-span-1 md:col-span-2 lg:col-span-3 px-4 sm:px-6 py-4 gap-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-[30%_70%] 2xl:grid-cols-[20%_80%] gap-y-6">
            <div className="flex flex-col items-center justify-center gap-3">
              <Image
                src={profileImage}
                alt="Avatar"
                width={180}
                height={180}
                className="rounded-full w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48"
              />
              <label
                htmlFor="foto"
                className="text-primario300 cursor-pointer text-sm sm:text-base"
              >
                Editar foto de perfil
              </label>
              <input
                id="foto"
                name="foto"
                className="hidden"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={isUploading}
              />
              <p className="text-sm sm:text-base">{user?.username}</p>
            </div>
            <div className="flex flex-col justify-around">
              <div className="p-4 sm:p-6">
                <p className="text-primario200 py-2 sm:py-3 font-bold text-sm sm:text-base">
                  {Role[user?.role || "user"]}
                </p>
                {user?.role !== "admin" && user?.role !== "superadmin" ? (
                  <div className="flex flex-wrap w-full gap-3 sm:gap-5 text-xs sm:text-sm">
                    <p className="">
                      <span className="text-primario200">25</span> Cursos
                      Publicados
                    </p>
                    <p className="">
                      <span className="text-primario200">5</span> Aplicaciones
                      creadas
                    </p>
                    <p className="">
                      <span className="text-primario200">200</span>{" "}
                      Subscriptores
                    </p>
                  </div>
                ) : null}
              </div>
              <DashCard classNames="mt-4">
                <div className="">
                  <h3 className="font-bold pb-2 text-sm sm:text-base">
                    Sobre mi:
                  </h3>
                  <p className="font-normal text-xs sm:text-sm">
                    Con más de 8 años de experiencia en el desarrollo de
                    aplicaciones no-code, Juan Pérez se ha convertido en un
                    referente en el uso de AppSheet, la plataforma de desarrollo
                    de aplicaciones de Google. Su pasión por la tecnología y su
                    enfoque en la simplificación de procesos empresariales lo
                    han llevado a ayudar a cientos de empresas a transformar sus
                    operaciones mediante aplicaciones personalizadas, sin
                    necesidad de código.
                  </p>
                </div>
              </DashCard>
            </div>
          </div>
          {user?.role === "seller" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
              <DashCard classNames="text-xs sm:text-sm font-semibold flex flex-col gap-2 sm:gap-4 select-none p-3 sm:p-4">
                <Sobre fill="white" width="20px" height="20px" />
                <p>Inicio de Sesión y seguridad</p>
                <p className="text-xs font-normal">
                  Actualiza tu contraseña y protege tu cuenta.
                </p>
              </DashCard>
              <DashCard classNames="text-xs sm:text-sm font-semibold flex flex-col gap-2 sm:gap-4 select-none p-3 sm:p-4">
                <Sobre fill="white" width="20px" height="20px" />
                <p>Pagos y cobros</p>
                <p className="text-xs font-normal">
                  Revisar pagos, cobros, cupones y tarjetas de regalo.
                </p>
              </DashCard>
              <DashCard classNames="text-xs sm:text-sm font-semibold flex flex-col gap-2 sm:gap-4 select-none p-3 sm:p-4">
                <Sobre fill="white" width="20px" height="20px" />
                <p>Otros Servicios</p>
                <p className="text-xs font-normal">Otros Servicios.</p>
              </DashCard>
              <DashCard classNames="text-xs sm:text-sm font-semibold flex flex-col gap-2 sm:gap-4 select-none p-3 sm:p-4">
                <Sobre fill="white" width="20px" height="20px" />
                <p>Información personal</p>
                <p className="text-xs font-normal">
                  Proporcione datos personales y cómo podemos comunicarnos con
                  usted.
                </p>
              </DashCard>
              <DashCard classNames="text-xs sm:text-sm font-semibold flex flex-col gap-2 sm:gap-4 select-none p-3 sm:p-4">
                <Sobre fill="white" width="20px" height="20px" />
                <p>Información de los servicios ofrecidos</p>
                <p className="text-xs font-normal">
                  Proporcione datos de los servicios ofrecidos.
                </p>
              </DashCard>
              <DashCard classNames="text-xs sm:text-sm font-semibold flex flex-col gap-2 sm:gap-4 select-none p-3 sm:p-4">
                <Sobre fill="white" width="20px" height="20px" />
                <p>Impuestos</p>
                <p className="text-xs font-normal">
                  Gestionar la información del contribuyente y los documentos
                  fiscales.
                </p>
              </DashCard>
            </div>
          )}
          <DashCard classNames="mt-6">
            <div className="flex flex-col sm:flex-row w-full justify-between items-center h-full gap-4 sm:gap-0">
              <div className="flex flex-col justify-center h-full text-center sm:text-left">
                <h2 className="font-bold text-sm sm:text-base">Agenda</h2>
                <p className="text-xs sm:text-sm font-semibold">
                  Configura tus días y horarios disponibles
                </p>
              </div>
              <Button
                variant="bordered"
                color="secondary"
                className="brightness-150 text-xs sm:text-sm"
              >
                Configurar calendario
              </Button>
            </div>
          </DashCard>
        </ContainerCard>
        <AdminCard>
          <div className="relative col-span-1 max-h-[250px] w-full">
            <Image
              className="h-40 sm:h-52 w-full object-cover"
              src={"/assets/recursos.png"}
              alt="recursos"
              width={237}
              height={50}
            />
          </div>
          <div className="flex flex-col items-center text-center gap-3 px-3 text-xs sm:text-sm font-semibold">
            <h2>Optimiza tu Perfil</h2>
            <p className="text-xs font-medium">
              Optimizá tu perfil y llevá tus apps al siguiente nivel. Accedé a
              recursos exclusivos que te ayudarán a mejorar tus habilidades y
              maximizar el potencial de tus proyectos.
            </p>
          </div>
          <button className="bg-primario500 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-md text-xs sm:text-sm font-semibold justify-self-center">
            Ir a los recursos
          </button>
        </AdminCard>
        <Notifications />
      </div>
    )
  );
}
