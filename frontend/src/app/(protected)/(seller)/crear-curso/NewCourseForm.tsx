"use client";
import AdminCard from "@/components/cards/AdminCard";
import DashCard from "@/components/cards/DashCard";
import FormNavigator from "@/components/form/FormNavigator";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import UploadFileInput from "../../(user)/up-to-seller/components/UploadFileInput";
import ModulesAndLessons from "./ModulesAndLessons";
import Promotions from "./Promotions";

export interface Lesson {
  title: string;
  description: string;
  videoUrl: File | null;
  pdfUrl: File[] | null;
}
export interface Module {
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Inputs {
  courseName: string;
  period: boolean;
  courseType: string;
  courseDescription: string;
  coursePrice: string;
  courseLevel: boolean;
  platform: string;
  language: string;
  pilar: string;
  course: Module[];
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
  promotion: boolean;
  discount: string;
}
export enum steps {
  "general",
  "detalles",
  "modulosyLecciones",
  "promociones",
}
const NewCourseForm = () => {
  const [step, setStep] = useState<steps>(steps.general);
  const [editing, setEditing] = useState(true);
  const [moduleTitle, setModuleTitle] = useState<string>("");
  const [moduleDescription, setModuleDescription] = useState<string>("");
  const [lessonTitle, setLessonTitle] = useState<string>("");
  const [lessonDescription, setLessonDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState<File>();
  const [pdfUrl, setPdfUrl] = useState<File[]>([]);
  const [modules, setModules] = useState<Module[]>([]);
  const [selectedModule, setSelectedModule] = useState<Module>({} as Module);
  const [addingNewLesson, setAddingNewLesson] = useState(false);
  const [submitButton, setSubmitButton] = useState<
    "button" | "submit" | "reset" | undefined
  >("button");
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {},
  });
  useEffect(() => {
    if (step === steps.promociones) {
      setSubmitButton("submit");
    } else {
      setSubmitButton("button");
    }
    return () => {};
  }, [step]);

  const onSubmit = (data: Inputs) => {
    const newData = { ...data, course: modules };
    console.log(newData);
  };
  const handleSaveModule = () => {
    if (!addingNewLesson) {
      const newModule: Module = {
        title: moduleTitle,
        description: moduleDescription,
        lessons: [
          {
            title: lessonTitle,
            description: lessonDescription,
            videoUrl: videoUrl ? videoUrl : null,
            pdfUrl: pdfUrl ? pdfUrl : null,
          },
        ],
      };
      setModules([...modules, newModule]);
      setSelectedModule(newModule);
      setValue("course", modules);
      setEditing(false);
    } else {
      const moduleToModify = modules.find(
        (module) => module.title === selectedModule.title
      );
      if (moduleToModify) {
        const newLesson: Lesson = {
          title: lessonTitle,
          description: lessonDescription,
          videoUrl: videoUrl ? videoUrl : null,
          pdfUrl: pdfUrl ? pdfUrl : null,
        };
        moduleToModify.lessons.push(newLesson);
        setModules(
          modules.map((m) =>
            m.title === moduleToModify.title ? moduleToModify : m
          )
        );
        console.log("hola");
        setValue("course", modules);
        setEditing(false);
        setAddingNewLesson(false);
      }
    }
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
                {...register("courseName")}
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
                  <input
                    {...register("coursePrice")}
                    type="radio"
                    name="coursePrice"
                    id="free"
                    value="0.00"
                  />
                  <label htmlFor="free">Contenido gratuito</label>
                </div>
                <div className="flex gap-4 my-4">
                  <input
                    {...register("coursePrice")}
                    type="radio"
                    name="coursePrice"
                    id="premium"
                    value="10.00"
                  />
                  <label htmlFor="premium">Contenido pago</label>
                </div>
              </div>
              <div>
                <p>Selecciona si vas a crear un curso o una lección</p>
                <div className="flex gap-4 my-4">
                  <input
                    {...register("courseType")}
                    type="radio"
                    name="courseType"
                    id="course"
                    value="course"
                  />
                  <label htmlFor="course">Curso</label>
                </div>
                <div className="flex gap-4 my-4">
                  <input
                    {...register("courseType")}
                    type="radio"
                    name="courseType"
                    id="lesson"
                    value="lesson"
                  />
                  <label htmlFor="lesson">Lección</label>
                </div>
              </div>
            </div>
            <div className="my-10">
              <p>Contá de qué trata, en no más de 3 líneas</p>
              <textarea
                {...register("courseDescription")}
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
                    {...register("courseLevel")}
                    type="radio"
                    name="courseLevel"
                    id="basic"
                    value="beginner"
                  />
                  <label htmlFor="courseLevel">Básico</label>
                </div>
                <div className="flex gap-4">
                  <input
                    {...register("courseLevel")}
                    type="radio"
                    name="courseLevel"
                    id="Intermedio"
                    value="intermediate"
                  />
                  <label htmlFor="courseLevel">Intermedio</label>
                </div>
              </div>
              <div>
                <p>Plataforma</p>
                <div className="flex gap-4">
                  <input
                    {...register("platform")}
                    type="radio"
                    name="platform"
                    id="AppSheet"
                    value="AppSheet"
                  />
                  <label htmlFor="courseLevel">AppSheet</label>
                </div>
                <div className="flex gap-4">
                  <input
                    {...register("platform")}
                    type="radio"
                    name="platform"
                    id="PowerApps"
                    value="PowerApps"
                  />
                  <label htmlFor="courseLevel">PowerApps</label>
                </div>
              </div>
              <div className="col-span-2 grid grid-cols-2 gap-x-10 my-6">
                <div>
                  <label>Elige el idioma del curso</label>
                  <input
                    className="w-full rounded-lg h-11 my-6"
                    {...register("language")}
                    type="text"
                    name="language"
                    id="language"
                  />
                </div>
                <div>
                  <label>Elige el sector al que deseas dirigir el curso</label>
                  <select
                    {...register("sector")}
                    name="sector"
                    className="w-full rounded-lg h-11 my-6"
                    id="sector"
                  >
                    <option
                      value={JSON.stringify({ id: 1, name: "Tecnología" })}
                    >
                      Tecnología
                    </option>
                    <option
                      value={JSON.stringify({ id: 2, name: "Programación" })}
                    >
                      Programación
                    </option>
                    <option
                      value={JSON.stringify({
                        id: 3,
                        name: "Inteligencia Artificial",
                      })}
                    >
                      Inteligencia Artificial
                    </option>
                  </select>
                </div>
                <div>
                  <label>Define el contenido del curso</label>
                  <input
                    className="w-full rounded-lg h-11 my-6"
                    {...register("pilar")}
                    type="text"
                    name="pilar"
                    id="pilar"
                  />
                </div>
                <div>
                  <label>Herramientas y plataformas</label>
                  <input
                    className="w-full rounded-lg h-11 my-6"
                    {...register("tools")}
                    type="text"
                    name="tools"
                    id="tools"
                  />
                </div>
                <div>
                  <label>Funcionalidades</label>
                  <input
                    className="w-full rounded-lg h-11 my-6"
                    {...register("functionalities")}
                    type="text"
                    name="functionalities"
                    id="functionalities"
                  />
                </div>
                <div>
                  <label>Agrega etiquetas relacionadas</label>
                  <input
                    className="w-full rounded-lg h-11 my-6"
                    {...register("hashtags")}
                    type="text"
                    name="hashtags"
                    id="hastags"
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
                <textarea
                  {...register("whatYouWillLearn")}
                  name="whatYouWillLearn"
                  id="whatYouWillLearn"
                  className="w-full h-40 rounded-lg my-6"
                />
                {errors.whatYouWillLearn?.message}
              </div>
              <div>
                <label htmlFor="requirements">Requisitos previos</label>
                <textarea
                  {...register("requirements")}
                  name="requirements"
                  id="requirements"
                  className="w-full h-40 rounded-lg my-6"
                />
              </div>
              <div>
                <label htmlFor="benefits">
                  Hacé una descripción detallada del contenido y de los
                  beneficios que ofrece.
                </label>
                <textarea
                  {...register("benefits")}
                  name="benefits"
                  id="benefits"
                  className="w-full h-40 rounded-lg my-6"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="coverImageUrl" className="py-6">
                  Subí una imagen que represente tu curso de manera atractiva
                  para utilizarla de portada
                </label>
                <UploadFileInput
                  fieldName="coverImageUrl"
                  detalleImagen="portada de tu video"
                  setValue={setValue}
                />
              </div>
            </section>
          )
        )}
        {step === steps.modulosyLecciones && (
          <section>
            <ModulesAndLessons
              addingNewLesson={addingNewLesson}
              setAddingNewLesson={setAddingNewLesson}
              modules={modules}
              handleSaveModule={handleSaveModule}
              setModuleTitle={setModuleTitle}
              setValue={setValue}
              editing={editing}
              lessonTitle={lessonTitle}
              lessonDescription={lessonDescription}
              lessonPdfUrl={pdfUrl}
              lessonVideoUrl={videoUrl}
              selectedModule={selectedModule}
              setEditing={setEditing}
              setSelectedModule={setSelectedModule}
              setLessonTitle={setLessonTitle}
              setLessonVideoUrl={setVideoUrl}
              setLessonPdfUrl={setPdfUrl}
              setLessonDescription={setLessonDescription}
              setModuleDescription={setModuleDescription}
            />
          </section>
        )}
        {step === steps.promociones && (
          <section>
            <Promotions combine={watch("promotion")} setValue={setValue} />
          </section>
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
          onClick={() => {
            switch (step) {
              case steps.general:
                setStep(steps.detalles);
                break;
              case steps.detalles:
                setStep(steps.modulosyLecciones);
                break;
              case steps.modulosyLecciones:
                setStep(steps.promociones);
                break;
            }
          }}
          type={submitButton}
        >
          Continuar
        </Button>
      </div>
    </form>
  );
};

export default NewCourseForm;
