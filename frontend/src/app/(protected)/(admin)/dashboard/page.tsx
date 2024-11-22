import DashCard from "@/components/cards/DashCard";
import React from "react";

const AdminPage = () => {
  return (
    <div className="pt-4 pb-16 select-none">
      <p className="px-5 py-5 text-lg font-bold">Estadísticas</p>
      <section className="odd:my-5 grid grid-cols-3 gap-x-28 mx-5 p-6 bg-[#1F2937] rounded-lg shadow-[0px_0px_20px_0px_#00000004]">
        <p className="col-span-3">Usuarios</p>
        <DashCard classNames="w-full gap-5">
          <h2 className="font-semibold">Total de usuarios activos</h2>
          <p className="text-primario300 text-5xl my-auto">20</p>
        </DashCard>
        <DashCard classNames="w-full gap-5">
          <h2 className="font-semibold">Total de usuarios registrados</h2>
          <p className="text-primario300 text-5xl my-auto">100</p>
        </DashCard>
        <DashCard classNames="w-full gap-5">
          Nuevos Usuarios
          <div className="flex gap-2 w-full justify-center px-5">
            <DashCard classNames="w-full">
              <h2 className="font-semibold">Diario</h2>
              <p className="text-primario300 text-2xl">3</p>
            </DashCard>
            <DashCard classNames="w-full">
              <h2 className="font-semibold">Semanal</h2>
              <p className="text-primario300 text-2xl">10</p>
            </DashCard>
            <DashCard classNames="w-full">
              <h2 className="font-semibold">Mensual</h2>
              <p className="text-primario300 text-2xl">30</p>
            </DashCard>
          </div>
        </DashCard>
      </section>
      <section className="odd:my-5 grid grid-cols-3 gap-x-28 mx-5 p-6 bg-[#1F2937] rounded-lg shadow-[0px_0px_20px_0px_#00000004]">
        <p className="col-span-3">Transacciones</p>
        <DashCard classNames="w-full gap-5">
          <h2 className="font-semibold">Ingresos generados</h2>
          <p className="text-primario300 text-5xl my-auto">$ 200.0000.-</p>
        </DashCard>
        <DashCard classNames="w-full gap-5">
          <h2 className="font-semibold">Comisiones acumuladas</h2>
          <p className="text-primario300 text-5xl my-auto">$ 10.000.-</p>
        </DashCard>
      </section>
      <section className="odd:my-5 grid grid-cols-3 gap-y-5 gap-x-28 mx-5 p-6 bg-[#1F2937] rounded-lg shadow-[0px_0px_20px_0px_#00000004]">
        <p className="col-span-3">Contenido publicado</p>
        <DashCard classNames="w-full gap-5">
          <h2 className="font-semibold">Nuevos cursos esta semana</h2>
          <p className="text-primario300 text-5xl my-auto">300</p>
        </DashCard>
        <DashCard classNames="w-full gap-5">
          <h2 className="font-semibold">Total de aplicaciones</h2>
          <p className="text-primario300 text-5xl my-auto">200</p>
        </DashCard>
        <DashCard classNames="w-full gap-5">
          <h2 className="font-semibold">Artículos</h2>
          <p className="text-primario300 text-5xl my-auto">20</p>
        </DashCard>
        <DashCard classNames="w-full gap-5">
          <h2 className="font-semibold">Consultas técnicas</h2>
          <p className="text-primario300 text-5xl my-auto">30</p>
        </DashCard>
      </section>
      <section className="odd:my-5 grid grid-cols-3 gap-y-5 gap-x-28 mx-5 p-6 bg-[#1F2937] rounded-lg shadow-[0px_0px_20px_0px_#00000004]">
        <p className="col-span-3">Contenido publicado</p>
        <DashCard classNames="w-full gap-5">
          <h2 className="font-semibold">Nuevos cursos esta semana</h2>
          <p className="text-primario300 text-5xl my-auto">300</p>
        </DashCard>
        <DashCard classNames="w-full gap-5">
          <h2 className="font-semibold">Total de aplicaciones</h2>
          <p className="text-primario300 text-5xl my-auto">200</p>
        </DashCard>
        <DashCard classNames="w-full gap-5">
          <h2 className="font-semibold">Artículos</h2>
          <p className="text-primario300 text-5xl my-auto">20</p>
        </DashCard>
        <DashCard classNames="w-full gap-5">
          <h2 className="font-semibold">Consultas técnicas</h2>
          <p className="text-primario300 text-5xl my-auto">30</p>
        </DashCard>
      </section>
      <section className="odd:my-5 grid grid-cols-2 2xl:grid-cols-3 gap-y-5 gap-x-28 mx-5 p-6 bg-[#1F2937] rounded-lg shadow-[0px_0px_20px_0px_#00000004]">
        <p className="col-span-2 2xl:col-span-3">Uso de la plataforma</p>
        <DashCard classNames="w-full gap-5">
          <h2 className="font-semibold">Tiempo promedio</h2>
          <p className="text-primario300 text-5xl my-auto">2 horas</p>
        </DashCard>
        <DashCard classNames="w-full gap-5">
          <h2 className="font-semibold">Módulos más utilizados</h2>
          <div className="flex flex-col gap-5 my-auto">
            <p className="text-primario300 text-5xl my-auto">
              <span className="text-bold">1 - </span>Cursos
            </p>
            <p className="text-primario300 text-5xl my-auto">
              <span className="text-bold">2 - </span>Aplicaciones
            </p>
            <p className="text-primario300 text-5xl my-auto">
              <span className="text-bold">3 - </span>Proyectos
            </p>
          </div>
        </DashCard>
        <DashCard classNames="w-full gap-5">
          <h2 className="font-semibold">Comportamiento de los usuarios</h2>
          <p className="text-primario300 text-5xl my-auto">20</p>
          <div className="flex gap-2 w-full justify-center px-5">
            <DashCard classNames="w-full gap-5">
              <h2 className="font-semibold">Usuarios advertidos</h2>
              <p className="text-primario300 text-5xl my-auto">30</p>
            </DashCard>
            <DashCard classNames="w-full gap-5">
              <h2 className="font-semibold text-center">
                Comportamientos no permitidos más frecuentes
              </h2>
              <div className="flex flex-col gap-5 px-2">
                <p className="text-primario300 text-xl">
                  <span className="text-bold">1 - </span>Compartir datos
                </p>
                <p className="text-primario300 text-xl">
                  <span className="text-bold">2 - </span>Aplicaciones indebidas
                </p>
              </div>
            </DashCard>
          </div>
        </DashCard>
      </section>
    </div>
  );
};

export default AdminPage;
