"use client";
import AdminCard from "@/components/cards/AdminCard";
import ContainerCard from "@/components/cards/ContainerCard";
import DashCard from "@/components/cards/DashCard";
import { RootState } from "@/stores/store";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

enum Role {
  admin = "Administrador",
  user = "Explorador",
  seller = "Vendedor",
  superadmin = "Super Administrador",
}

const Page = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  return (
    <div className="grid grid-cols-4 gap-x-12">
      <ContainerCard sectionClass="grid grid-cols-[30%_70%] 2xl:grid-cols-[20%_80%] col-span-3 px-6 py-4 gap-y-6">
        <div className="flex flex-col items-center justify-center gap-3">
          <Image
            src={"/assets/avatars/foto1.png"}
            alt="Avatar"
            width={180}
            height={180}
            className="rounded-full"
          />
          <label htmlFor="foto" className="text-primario300 cursor-pointer">
            Editar foto de perfil
          </label>
          <input id="foto" name="foto" className="hidden" type="file" />
          <p>{user?.username}</p>
        </div>
        <div className="flex flex-col justify-around">
          <div className="p-6">
            <p className="text-primario200 py-3 font-bold">
              {Role[user?.role || "user"]}
            </p>
            {user?.role !== "admin" && user?.role !== "superadmin" ? (
              <div className="flex w-full gap-5">
                <p className="">
                  <span className="text-primario200">25</span> Cursos Publicados
                </p>
                <p className="">
                  <span className="text-primario200">5</span> Aplicaciones
                  creadas
                </p>
                <p className="">
                  <span className="text-primario200">200</span> Subscriptores
                </p>
              </div>
            ) : null}
          </div>
          <DashCard classNames="">
            <div className="">
              <h3 className="font-bold pb-2">Sobre mi</h3>
              <p className="font-normal text-sm">
                Con más de 8 años de experiencia en el desarrollo de
                aplicaciones no-code, Juan Pérez se ha convertido en un
                referente en el uso de AppSheet, la plataforma de desarrollo de
                aplicaciones de Google. Su pasión por la tecnología y su enfoque
                en la simplificación de procesos empresariales lo han llevado a
                ayudar a cientos de empresas a transformar sus operaciones
                mediante aplicaciones personalizadas, sin necesidad de código.
              </p>
            </div>
          </DashCard>
        </div>
        <DashCard classNames="col-span-4 ">
          <div className="flex w-full justify-between items-center h-full">
            <div className="flex flex-col justify-center h-full">
              <h2 className="font-bold">Agenda</h2>
              <p className="text-sm font-semibold">
                Configura tus días y horarios disponibles
              </p>
            </div>
            <Button
              variant="bordered"
              color="secondary"
              className="brightness-150"
            >
              Configurar calendario
            </Button>
          </div>
        </DashCard>
      </ContainerCard>
      <AdminCard>
        <div className="relative col-span-1 max-h-[250px] w-full">
          <Image
            className="h-52 w-full cover"
            src={"/assets/recursos.png"}
            alt="recursos"
            width={237}
            height={50}
          />
        </div>
        <div className="flex flex-col items-center text-center gap-3 px-3 text-sm font-semibold">
          <h2>Optimiza tu Perfil</h2>
          <p className="text-xs font-medium">
            Optimizá tu perfil y llevá tus apps al siguiente nivel. Accedé a
            recursos exclusivos que te ayudarán a mejorar tus habilidades y
            maximizar el potencial de tus proyectos.
          </p>
        </div>
        <button className="bg-primario500 text-white py-3 px-4 rounded-md text-sm font-semibold justify-self-center">
          Ir a los recursos
        </button>
      </AdminCard>
    </div>
  );
};

export default Page;
