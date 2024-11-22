"use client";
import ContainerCard from "@/components/cards/ContainerCard";
import DashCard from "@/components/cards/DashCard";
import { RootState } from "@/stores/store";
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
    <div className="h-screen">
      <ContainerCard sectionClass="grid grid-cols-[20%_80%]">
        <div className="flex flex-col items-center justify-center gap-3">
          <Image
            src={"/assets/avatars/foto1.png"}
            alt="Avatar"
            width={120}
            height={120}
            className="rounded-full"
          />
          <label htmlFor="foto" className="text-primario300 cursor-pointer">
            Editar foto de perfil
          </label>
          <input id="foto" name="foto" className="hidden" type="file" />
          <p>{user?.username}</p>
        </div>
        <div>
          <div className="p-6">
            <p className="text-primario200 py-3">
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
          <DashCard classNames="p-3">
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
      </ContainerCard>
    </div>
  );
};

export default Page;
