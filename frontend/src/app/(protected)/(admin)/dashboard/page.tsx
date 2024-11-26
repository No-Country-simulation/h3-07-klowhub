"use client";
import DashCard from "@/components/cards/DashCard";
import { useState } from "react";

enum vistas {
  estadisticas = "Estadísticas",
  alertas = "Alertas y Notificaciones",
  configuracion = "Configuración rápida",
}
const DashPage = () => {
  const [view, setView] = useState<vistas>(vistas.estadisticas);
  return (
    <div className="pt-4 pb-16 select-none">
      <div className="flex w-full justify-between">
        <p
          className={`cursor-pointer mx-5 mb-2 py-5 px-3 text-center text-lg font-bold ${
            view === vistas.estadisticas ? "bg-white/20 rounded-2xl" : ""
          }`}
          onClick={() => setView(vistas.estadisticas)}
        >
          {vistas.estadisticas}
        </p>
        <p
          className={`cursor-pointer mx-5 mb-2 py-5 px-3 text-center text-lg font-bold ${
            view === vistas.alertas ? "bg-white/20 rounded-2xl" : ""
          }`}
          onClick={() => setView(vistas.alertas)}
        >
          {vistas.alertas}
        </p>
        <p
          className={`cursor-pointer mx-5 mb-2 py-5 px-3 text-center text-lg font-bold ${
            view === vistas.configuracion ? "bg-white/20 rounded-2xl" : ""
          }`}
          onClick={() => setView(vistas.configuracion)}
        >
          {vistas.configuracion}
        </p>
      </div>
      {view === vistas.estadisticas && (
        <>
          <section className="odd:my-5 grid grid-cols-3 gap-x-28 mx-5 p-6 bg-[#1F2937] rounded-lg shadow-[0px_0px_20px_0px_#00000004]">
            <p className="col-span-3">Usuarios</p>
            <DashCard classNames="w-full gap-5 items-center py-3">
              <h2 className="font-semibold">Total de usuarios activos</h2>
              <p className="text-primario300 text-5xl my-auto">20</p>
            </DashCard>
            <DashCard classNames="w-full gap-5 items-center py-3">
              <h2 className="font-semibold">Total de usuarios registrados</h2>
              <p className="text-primario300 text-5xl my-auto">100</p>
            </DashCard>
            <DashCard classNames="w-full gap-5 items-center py-3">
              Nuevos Usuarios
              <div className="flex gap-2 w-full justify-center px-5">
                <DashCard classNames="w-full items-center">
                  <h2 className="font-semibold">Diario</h2>
                  <p className="text-primario300 text-2xl">3</p>
                </DashCard>
                <DashCard classNames="w-full items-center">
                  <h2 className="font-semibold">Semanal</h2>
                  <p className="text-primario300 text-2xl">10</p>
                </DashCard>
                <DashCard classNames="w-full items-center">
                  <h2 className="font-semibold">Mensual</h2>
                  <p className="text-primario300 text-2xl">30</p>
                </DashCard>
              </div>
            </DashCard>
          </section>
          <section className="odd:my-5 grid grid-cols-3 gap-x-28 mx-5 p-6 bg-[#1F2937] rounded-lg shadow-[0px_0px_20px_0px_#00000004]">
            <p className="col-span-3">Transacciones</p>
            <DashCard classNames="w-full gap-5 items-center py-3">
              <h2 className="font-semibold">Ingresos generados</h2>
              <p className="text-primario300 text-5xl my-auto">$ 200.0000.-</p>
            </DashCard>
            <DashCard classNames="w-full gap-5 items-center py-3">
              <h2 className="font-semibold">Comisiones acumuladas</h2>
              <p className="text-primario300 text-5xl my-auto">$ 10.000.-</p>
            </DashCard>
          </section>
          <section className="odd:my-5 grid grid-cols-3 gap-y-5 gap-x-28 mx-5 p-6 bg-[#1F2937] rounded-lg shadow-[0px_0px_20px_0px_#00000004]">
            <p className="col-span-3">Contenido publicado</p>
            <DashCard classNames="w-full gap-5 items-center py-3">
              <h2 className="font-semibold">Nuevos cursos esta semana</h2>
              <p className="text-primario300 text-5xl my-auto">300</p>
            </DashCard>
            <DashCard classNames="w-full gap-5 items-center py-3">
              <h2 className="font-semibold">Total de aplicaciones</h2>
              <p className="text-primario300 text-5xl my-auto">200</p>
            </DashCard>
            <DashCard classNames="w-full gap-5 items-center py-3">
              <h2 className="font-semibold">Artículos</h2>
              <p className="text-primario300 text-5xl my-auto">20</p>
            </DashCard>
            <DashCard classNames="w-full gap-5 items-center py-3">
              <h2 className="font-semibold">Consultas técnicas</h2>
              <p className="text-primario300 text-5xl my-auto">30</p>
            </DashCard>
          </section>
          <section className="odd:my-5 grid grid-cols-3 gap-y-5 gap-x-28 mx-5 p-6 bg-[#1F2937] rounded-lg shadow-[0px_0px_20px_0px_#00000004]">
            <p className="col-span-3">Contenido publicado</p>
            <DashCard classNames="w-full gap-5 items-center py-3">
              <h2 className="font-semibold">Nuevos cursos esta semana</h2>
              <p className="text-primario300 text-5xl my-auto">300</p>
            </DashCard>
            <DashCard classNames="w-full gap-5 items-center py-3">
              <h2 className="font-semibold">Total de aplicaciones</h2>
              <p className="text-primario300 text-5xl my-auto">200</p>
            </DashCard>
            <DashCard classNames="w-full gap-5 items-center py-3">
              <h2 className="font-semibold">Artículos</h2>
              <p className="text-primario300 text-5xl my-auto">20</p>
            </DashCard>
            <DashCard classNames="w-full gap-5 items-center py-3">
              <h2 className="font-semibold">Consultas técnicas</h2>
              <p className="text-primario300 text-5xl my-auto">30</p>
            </DashCard>
          </section>
          <section className="odd:my-5 grid grid-cols-2 2xl:grid-cols-3 gap-y-5 gap-x-28 mx-5 p-6 bg-[#1F2937] rounded-lg shadow-[0px_0px_20px_0px_#00000004]">
            <p className="col-span-2 2xl:col-span-3">Uso de la plataforma</p>
            <DashCard classNames="w-full gap-5 items-center py-3">
              <h2 className="font-semibold">Tiempo promedio</h2>
              <p className="text-primario300 text-5xl my-auto">2 horas</p>
            </DashCard>
            <DashCard classNames="w-full gap-5 items-center py-3">
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
            <DashCard classNames="w-full gap-5 items-center py-3">
              <h2 className="font-semibold">Comportamiento de los usuarios</h2>
              <p className="text-primario300 text-5xl my-auto">20</p>
              <div className="flex gap-2 w-full justify-center px-5">
                <DashCard classNames="w-full gap-5 items-center py-3">
                  <h2 className="font-semibold">Usuarios advertidos</h2>
                  <p className="text-primario300 text-5xl my-auto">30</p>
                </DashCard>
                <DashCard classNames="w-full gap-5 items-center py-3">
                  <h2 className="font-semibold text-center">
                    Comportamientos no permitidos más frecuentes
                  </h2>
                  <div className="flex flex-col gap-5 px-2">
                    <p className="text-primario300 text-xl">
                      <span className="text-bold">1 - </span>Compartir datos
                    </p>
                    <p className="text-primario300 text-xl">
                      <span className="text-bold">2 - </span>Aplicaciones
                      indebidas
                    </p>
                  </div>
                </DashCard>
              </div>
            </DashCard>
          </section>
        </>
      )}
      {view === vistas.alertas && (
        <>
          <section className="odd:my-5 grid grid-cols-3 gap-x-28 mx-5 p-6 bg-[#1F2937] rounded-lg shadow-[0px_0px_20px_0px_#00000004]">
            <p className="col-span-3">Alertas y Notificaciones</p>
            <DashCard classNames="w-full gap-5 items-center py-3 ">
              <h2 className="font-semibold">Incidentes de seguridad</h2>
              <p className="text-primario300 text-5xl my-auto text-center">
                20 accesos no autorizados
              </p>
            </DashCard>
            <DashCard classNames="w-full gap-5 items-center py-3">
              <h2 className="font-semibold">Usos indebidos</h2>
              <p className="text-primario300 text-5xl my-auto">100</p>
            </DashCard>
            <DashCard classNames="w-full gap-5 items-center py-3">
              <h2 className="font-semibold">
                Publicaciones Pendientes de aprobación
              </h2>
              <ul className="text-primario300 text-lg my-auto mx-auto text-center">
                <li className="list-none hover:cursor-pointer hover:text-white">
                  MurgaApp - AppSheet
                </li>
                <li className="list-none hover:cursor-pointer hover:text-white">
                  Leoncito - PowerApp
                </li>
                <li className="list-none hover:cursor-pointer hover:text-white">
                  El mejor aliado de tu App - Publicaión
                </li>
                <li className="list-none hover:cursor-pointer hover:text-white">
                  Aprendiendo PowerApp - Curso
                </li>
                <li className="list-none hover:cursor-pointer hover:text-white">
                  AlCaféCafé - AppShare
                </li>
              </ul>
            </DashCard>
          </section>
        </>
      )}
      {view === vistas.configuracion && (
        <>
          <section className="odd:my-5 grid grid-cols-3 gap-x-28 mx-5 p-6 bg-[#1F2937] rounded-lg shadow-[0px_0px_20px_0px_#00000004]">
            <p className="col-span-3">Precios</p>
            <DashCard classNames="w-full gap-5 items-center py-3">
              <h2 className="font-semibold">Precio mínimo por curso</h2>
              <input type="number" />
            </DashCard>
            <DashCard classNames="w-full gap-5 items-center py-3">
              <h2 className="font-semibold">Precio máximo por curso</h2>
              <input type="number" />
            </DashCard>
          </section>
        </>
      )}
    </div>
  );
};

export default DashPage;
