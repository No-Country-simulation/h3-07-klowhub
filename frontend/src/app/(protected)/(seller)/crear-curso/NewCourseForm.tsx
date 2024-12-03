"use client";
import AdminCard from "@/components/cards/AdminCard";
import DashCard from "@/components/cards/DashCard";
import FormNavigator from "@/components/form/FormNavigator";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export interface Inputs {
  courseName: string;
  period: boolean;
  courseType: string;
  courseDescription: string;
  coursePrice: string;
  courseLevel: string;
  platform: string;
  language: string;
  pilar: string;
  hashtags: string[];
  contentTypes: string;
  requirements: string;
  tools: string[];
  functionalities: string[];
  whatYouWillLearn: string;
  benefits: string[];
  coverImageUrl: string;
  sector: {
    id: number;
    name: string;
  };
}
export enum steps {
  "general",
  "detalles",
  "modulosyLecciones",
  "promociones",
}
const NewCourseForm = () => {
  const [step, setStep] = useState<steps>(steps.detalles);
  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {},
  });
  const onSubmit = (data: Inputs) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pb-5">
      <FormNavigator step={step} setStep={setStep} />

      <DashCard classNames="grid grid-cols-[60%_30%] py-4 mb-5 justify-between">
        {step === steps.general ? (
          <section>
            <div className="flex flex-col gap-4">
              <label htmlFor="courseName">Título del curso/lección</label>
              <input
                {...register}
                name="courseName"
                id="title"
                type="text"
                placeholder="Nombra tu curso o lección"
                className="w-1/3 rounded-lg p-2"
              />
            </div>
            <div className="flex justify-around w-2/3 gap-5 my-10 bg-white/20 rounded-2xl px-5 py-2">
              <div>icono</div>
              <p className="text-sm font-semibold">
                El contenido gratuito ofrece acceso limitado a [características
                breves del contenido gratuito]. El contenido premium desbloquea
                [principales beneficios del contenido de pago]. Más información
                en nuestra{" "}
                <span className="text-blue-600 cursor-pointer">
                  documentación
                </span>
                .
              </p>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <p>¿Qué tipo de contenido estás ofreciendo?</p>
                <div className="flex gap-4 my-4">
                  <input {...register} type="radio" name="period" id="free" />
                  <label htmlFor="free">Contenido gratuito</label>
                </div>
                <div className="flex gap-4 my-4">
                  <input
                    {...register}
                    type="radio"
                    name="period"
                    id="premium"
                  />
                  <label htmlFor="premium">Contenido pago</label>
                </div>
              </div>
              <div>
                <p>Selecciona si vas a crear un curso o una lección</p>
                <div className="flex gap-4 my-4">
                  <input
                    {...register}
                    type="radio"
                    name="courseType"
                    id="course"
                  />
                  <label htmlFor="course">Curso</label>
                </div>
                <div className="flex gap-4 my-4">
                  <input
                    {...register}
                    type="radio"
                    name="courseType"
                    id="lesson"
                  />
                  <label htmlFor="lesson">Lección</label>
                </div>
              </div>
            </div>
            <div className="my-10">
              <p>Contá de qué trata, en no más de 3 líneas</p>
              <input
                {...register}
                type="text-area"
                name="courseDescription"
                className="rounded-lg my-2 h-40 w-full"
                id="courseDescription"
              />
            </div>
            <div className="grid grid-cols-2">
              <div>
                <p>Nivel de competencia</p>
                <div className="flex gap-4">
                  <input
                    {...register}
                    type="radio"
                    name="courseLevel"
                    id="basic"
                  />
                  <label htmlFor="courseLevel">Básico</label>
                </div>
                <div className="flex gap-4">
                  <input
                    {...register}
                    type="radio"
                    name="courseLevel"
                    id="Intermedio"
                  />
                  <label htmlFor="courseLevel">Intermedio</label>
                </div>
              </div>
              <div>
                <p>Plataforma</p>
                <div className="flex gap-4">
                  <input type="radio" name="platform" id="AppSheet" />
                  <label htmlFor="courseLevel">AppSheet</label>
                </div>
                <div className="flex gap-4">
                  <input type="radio" name="platform" id="PowerApps" />
                  <label htmlFor="courseLevel">PowerApps</label>
                </div>
              </div>
              <div className="col-span-2 grid grid-cols-2 gap-x-10 my-6">
                <div>
                  <label>Elige el idioma del curso</label>
                  <input
                    className="w-full rounded-lg h-11 my-6"
                    {...register}
                    type="text"
                    name="language"
                    id="language"
                  />
                </div>
                <div>
                  <label>Elige el sector al que deseas dirigir el curso</label>
                  <select
                    {...register}
                    name="sector"
                    className="w-full rounded-lg h-11 my-6"
                    id="language"
                  >
                    <option value="1">Tecnologia</option>
                    <option value="2">Programación</option>
                    <option value="3">Inteligencia Artificial</option>
                  </select>
                </div>
                <div>
                  <label>Define el contenido del curso</label>
                  <input
                    className="w-full rounded-lg h-11 my-6"
                    {...register}
                    type="text"
                    name="contentTypes"
                    id="language"
                  />
                </div>
                <div>
                  <label>Herramientas y plataformas</label>
                  <input
                    className="w-full rounded-lg h-11 my-6"
                    {...register}
                    type="text"
                    name="tools"
                    id="language"
                  />
                </div>
                <div>
                  <label>Funcionalidades</label>
                  <input
                    className="w-full rounded-lg h-11 my-6"
                    {...register}
                    type="text"
                    name="functionalities"
                    id="language"
                  />
                </div>
                <div>
                  <label>Agrega etiquetas relacionadas</label>
                  <input
                    className="w-full rounded-lg h-11 my-6"
                    {...register}
                    type="text"
                    name="hashtags"
                    id="language"
                  />
                </div>
              </div>
            </div>
          </section>
        ) : (
          step === steps.detalles && (
            <section className="flex flex-col gap-4">
              <div>
                <label htmlFor="whatYouWillLearn">
                  Decinos qué van a aprender tus estudiantes al finalizar el
                  curso.
                </label>
                <input
                  {...register}
                  type="text-area"
                  name="whatYouWillLearn"
                  id="whatYouWillLearn"
                  className="w-full h-40 rounded-lg my-6"
                />
              </div>
              <div>
                <label htmlFor="whatYouWillLearn">Requisitos previos</label>
                <input
                  {...register}
                  type="text-area"
                  name="requirements"
                  id="requirements"
                  className="w-full h-40 rounded-lg my-6"
                />
              </div>
              <div>
                <label htmlFor="whatYouWillLearn">
                  Hacé una descripción detallada del contenido y de los
                  beneficios que ofrece.
                </label>
                <input
                  {...register}
                  type="text-area"
                  name="benefits"
                  id="benefits"
                  className="w-full h-40 rounded-lg my-6"
                />
              </div>
            </section>
          )
        )}

        <section>
          <AdminCard>
            <div className="relative col-span-1 max-h-[250px] w-full">
              <Image
                className="h-52 w-full bg-center"
                src={"/assets/backgrounds/profileOptimizer.png"}
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
          </AdminCard>
        </section>
      </DashCard>

      <div className="w-full flex justify-end">
        <Button
          variant="solid"
          className="bg-primario500 text-white px-16 rounded-lg hover:bg-primario300"
          onClick={() => setStep(steps.detalles)}
        >
          Continuar
        </Button>
      </div>
    </form>
  );
};

export default NewCourseForm;
