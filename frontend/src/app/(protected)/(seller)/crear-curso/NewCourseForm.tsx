"use client";
import DashCard from "@/components/cards/DashCard";
import FormNavigator from "@/components/form/FormNavigator";
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
  const [step, setStep] = useState<steps>(steps.general);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {},
  });
  const onSubmit = (data: Inputs) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pb-5">
      <FormNavigator step={step} setStep={setStep} />
      {step === steps.general && (
        <DashCard classNames="grid grid-cols-2 py-4 mb-5">
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
                  <input type="radio" name="period" id="free" />
                  <label htmlFor="free">Contenido gratuito</label>
                </div>
                <div className="flex gap-4 my-4">
                  <input type="radio" name="period" id="premium" />
                  <label htmlFor="premium">Contenido pago</label>
                </div>
              </div>
              <div>
                <p>Selecciona si vas a crear un curso o una lección</p>
                <div className="flex gap-4 my-4">
                  <input type="radio" name="courseType" id="course" />
                  <label htmlFor="course">Curso</label>
                </div>
                <div className="flex gap-4 my-4">
                  <input type="radio" name="courseType" id="lesson" />
                  <label htmlFor="lesson">Lección</label>
                </div>
              </div>
            </div>
            <div className="my-10">
              <p>Contá de qué trata, en no más de 3 líneas</p>
              <input
                type="text-area"
                name="courseDescription"
                className="rounded-lg my-2 h-40 w-full"
                id="courseDescription"
              />
            </div>
            <div className="grid grid-cols-2">
              <div>
                <p>Nivel de competencia</p>
                <div className="flex flex-col gap-4">
                  <input type="radio" name="courseLevel" id="basic" />
                  <label htmlFor="courseLevel">Básico</label>
                </div>
                <div className="flex flex-col gap-4">
                  <input type="radio" name="courseLevel" id="Intermedio" />
                  <label htmlFor="courseLevel">Intermedio</label>
                </div>
              </div>
              <div>
                <p>Plataforma</p>
                <div className="flex flex-col gap-4">
                  <input type="radio" name="platform" id="AppSheet" />
                  <label htmlFor="courseLevel">AppSheet</label>
                </div>
                <div className="flex flex-col gap-4">
                  <input type="radio" name="platform" id="PowerApps" />
                  <label htmlFor="courseLevel">PowerApps</label>
                </div>
              </div>
            </div>
          </section>
        </DashCard>
      )}
    </form>
  );
};

export default NewCourseForm;
