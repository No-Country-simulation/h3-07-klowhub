"use client";
import { steps } from "@/app/(protected)/(seller)/crear-curso/NewCourseForm";

const FormNavigator = ({
  step,
  setStep,
}: {
  step: steps;
  setStep: (step: steps) => void;
}) => {
  return (
    <div className="w-full flex py-4">
      <div
        className={`border-b ${
          step === steps.general ? "border-b-primario300" : "border-b-white"
        } py-1`}
      >
        <p
          onClick={() => setStep(steps.general)}
          className={`text-sm font-semibold px-4 cursor-pointer select-none ${
            step === steps.general ? "text-primario300" : "text-white"
          }`}
        >
          Información General
        </p>
      </div>
      <div
        className={`border-b ${
          step === steps.detalles ? "border-b-primario300" : "border-b-white"
        } py-1`}
      >
        <p
          onClick={() => setStep(steps.detalles)}
          className={`text-sm font-semibold px-4 cursor-pointer select-none ${
            step === steps.detalles ? "text-primario300" : "text-white"
          }`}
        >
          Detalles del Curso
        </p>
      </div>
      <div
        className={`border-b ${
          step === steps.modulosyLecciones
            ? "border-b-primario300"
            : "border-b-white"
        } py-1`}
      >
        <p
          onClick={() => setStep(steps.modulosyLecciones)}
          className={`text-sm font-semibold px-4 cursor-pointer select-none ${
            step === steps.modulosyLecciones ? "text-primario300" : "text-white"
          }`}
        >
          Módulos y lecciones
        </p>
      </div>
      <div
        className={`border-b ${
          step === steps.promociones ? "border-b-primario300" : "border-b-white"
        } py-1`}
      >
        <p
          onClick={() => setStep(steps.promociones)}
          className={`text-sm font-semibold px-4 cursor-pointer select-none ${
            step === steps.promociones ? "text-primario300" : "text-white"
          }`}
        >
          Promociones
        </p>
      </div>
    </div>
  );
};

export default FormNavigator;
