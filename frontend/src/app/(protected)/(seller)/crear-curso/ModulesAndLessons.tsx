"use client";
import DashCard from "@/components/cards/DashCard";
import { Lesson, Module } from "./NewCourseForm";
import UploadPDFFileInput from "./UploadPDFInput";
import { Button } from "@nextui-org/button";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { UseFormSetValue } from "react-hook-form";
import { HandleVideoUpload } from "@/utils/fileHandle";
import { useState } from "react";

interface ModulesAndLessonsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: UseFormSetValue<any>;
  editing: boolean;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedModule: React.Dispatch<
    React.SetStateAction<Module | null | undefined>
  >;
  selectedModule: Module | null | undefined;
  modules?: Module[];
  setModules?: React.Dispatch<React.SetStateAction<Module[]>>;
  lessonTitle: string;
  setLessonTitle: React.Dispatch<React.SetStateAction<string>>;
  lessonDescription: string;
  setLessonDescription: React.Dispatch<React.SetStateAction<string>>;
  setModuleTitle: React.Dispatch<React.SetStateAction<string>>;
  setModuleDescription: React.Dispatch<React.SetStateAction<string>>;
  lessonVideoUrl: string | undefined;
  lessonPdfUrl: string;
  setLessonVideoUrl: React.Dispatch<React.SetStateAction<string | undefined>>;
  setLessonPdfUrl: React.Dispatch<React.SetStateAction<string | undefined>>;
  handleSaveModule: () => void;
  addingNewLesson: boolean;
  setAddingNewLesson: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModulesAndLessons = ({
  addingNewLesson,
  setAddingNewLesson,
  setValue,
  editing,
  selectedModule,
  setEditing,
  setModuleTitle,
  setSelectedModule,
  modules,
  setLessonTitle,
  setLessonDescription,
  setLessonVideoUrl,
  setModuleDescription,
  handleSaveModule,
}: ModulesAndLessonsProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const uploadvideo = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setLoading(true);
    try {
      setLessonVideoUrl(await HandleVideoUpload(e.target.files[0]));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {editing ? (
        <>
          <div className="flex flex-col gap-6 mb-12">
            <label>Titulo del módulo</label>
            <input
              onChange={(e) => setModuleTitle(e.target.value)}
              type="text"
              name="moduleTitle"
              className="h-11 rounded-lg w-2/3 text-black"
            />
          </div>
          <div className="flex flex-col gap-6 mb-12">
            <label>Descripción</label>
            <textarea
              onChange={(e) => setModuleDescription(e.target.value)}
              name="moduleDescription"
              className="h-40 rounded-lg"
            />
          </div>
          <div>
            <DashCard>
              <div className="flex flex-col gap-6 mb-12">
                <label>Titulo de la lección</label>
                <input
                  onChange={(e) => setLessonTitle(e.target.value)}
                  type="text"
                  name="lessonTitle"
                  className="h-11 rounded-lg w-2/3"
                />
              </div>
              <div className="flex flex-col gap-6 mb-12">
                <label>Descripción</label>
                <textarea
                  onChange={(e) => setLessonDescription(e.target.value)}
                  name="lessonDescription"
                  className="h-40 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-6 mb-12">
                <p>Contenido de la lección</p>
                <div>
                  <label
                    className="bg-transparent border border-primario300 rounded-bl-lg rounded-tl-lg text-primario200 px-4 py-3 text-sm font-semibold"
                    htmlFor="lessionLink"
                  >
                    Enlace
                  </label>
                  <input
                    type="file"
                    onChange={uploadvideo}
                    className="rounded-tr-lg rounded-br-lg px-4 py-3 text-sm text-black w-2/6"
                    name="lessionLink"
                    id="lessionLink"
                  />
                </div>
              </div>
              <div className="my-6">
                <p className="py-4">Material Adicional</p>
                <UploadPDFFileInput
                  fieldName="aditionalFiles"
                  setValue={setValue}
                />
              </div>
              <div className="w-full flex gap-2 justify-end">
                <Button
                  variant="bordered"
                  className="border-primario300 disabled:border-gray-400 disabled:text-gray-400 hover:border-primario400 text-primario300 hover:text-primario400 rounded-lg"
                  onClick={handleSaveModule}
                  disabled={loading}
                >
                  Guardar
                </Button>
              </div>
            </DashCard>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-4 mb-12 text-sm font-semibold">
            <h2>Titulo del módulo</h2>
            <p>{selectedModule?.modulName}</p>
          </div>
          <div className="flex flex-col gap-4 mb-12 text-sm font-semibold">
            <h2>Descripción</h2>
            <p className="text-sm font-normal">
              {selectedModule?.modulDescription}
            </p>
          </div>
          {!addingNewLesson &&
            modules?.map((module: Module) => (
              <div
                onClick={() => setSelectedModule(module)}
                key={module.modulName}
              >
                <DashCard classNames="mt-6 cursor-pointer">
                  <h1 className="pb-4">Modulo 1: {module.modulName}</h1>
                  <DashCard>
                    <Accordion selectionMode="multiple">
                      {module.lessons ? (
                        module.lessons?.map((lesson: Lesson) => (
                          <AccordionItem
                            key={lesson.lessonTitle}
                            title={lesson.lessonTitle}
                          >
                            <p>{lesson.lessonDescription}</p>
                          </AccordionItem>
                        ))
                      ) : (
                        <AccordionItem title="No hay lecciones cargadas"></AccordionItem>
                      )}
                    </Accordion>
                  </DashCard>
                </DashCard>
              </div>
            ))}
          {addingNewLesson && (
            <div>
              <DashCard>
                <div className="flex flex-col gap-6 mb-12">
                  <label>Titulo de la lección</label>
                  <input
                    onChange={(e) => setLessonTitle(e.target.value)}
                    type="text"
                    name="lessonTitle"
                    className="h-11 rounded-lg w-2/3"
                  />
                </div>
                <div className="flex flex-col gap-6 mb-12">
                  <label>Descripción</label>
                  <input
                    onChange={(e) => setLessonDescription(e.target.value)}
                    type="text-area"
                    name="lessonDescription"
                    className="h-40 rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-6 mb-12">
                  <p>Contenido de la lección</p>
                  <div>
                    <label
                      className="bg-transparent border border-primario300 rounded-bl-lg rounded-tl-lg text-primario200 px-4 py-3 text-sm font-semibold"
                      htmlFor="lessonVideo"
                    >
                      Enlace
                    </label>
                    <input
                      type="file"
                      onChange={(e) =>
                        setValue("lessonVideo", e.target.files?.[0])
                      }
                      className="rounded-tr-lg rounded-br-lg px-4 py-3 text-sm text-black w-2/6"
                      name="lessonVideo"
                      id="lessonVideo"
                    />
                  </div>
                </div>
                <div className="my-6">
                  <p className="py-4">Material Adicional</p>
                  <UploadPDFFileInput
                    fieldName="aditionalFiles"
                    setValue={setValue}
                  />
                </div>
                <div className="w-full flex gap-2 justify-end">
                  <Button
                    variant="bordered"
                    className="border-primario300 hover:border-primario400 text-primario300 hover:text-primario400 rounded-lg"
                    onClick={handleSaveModule}
                  >
                    Guardar
                  </Button>
                </div>
              </DashCard>
            </div>
          )}
          <div className="flex justify-between">
            <Button
              variant="bordered"
              className="border-primario300 text-primario300 my-6 hover:text-primario400 hover:border-primario400"
              onClick={() => setEditing(true)}
            >
              Agregar Módulo
            </Button>
            {!editing && (
              <Button
                variant="flat"
                className=" bg-transparent text-primario300 my-6 hover:text-primario400 hover:border-primario400"
                onClick={() => setAddingNewLesson(true)}
              >
                Agregar lección
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ModulesAndLessons;
