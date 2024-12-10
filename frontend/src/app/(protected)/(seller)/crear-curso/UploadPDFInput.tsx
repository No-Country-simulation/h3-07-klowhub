"use client";
import { UseFormSetValue } from "react-hook-form";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { HandleImageUpload } from "@/utils/fileHandle";
import UploadIcon from "../../(user)/up-to-seller/components/UploadIcon";

interface UploadFileInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: UseFormSetValue<any>;
  fieldName: string;
  error?: string;
}
const UploadPDFFileInput = ({
  setValue,
  fieldName,
  error,
}: UploadFileInputProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles?.length) {
        try {
          setIsUploading(true);
          const formData = new FormData();
          formData.append("file", acceptedFiles[0]);
          const respuesta = await HandleImageUpload(formData);
          setValue(fieldName, respuesta.imageUrl);
          setIsUploaded(true);
        } catch (error) {
          console.log("Error en la carga:", error);
          setIsUploaded(false);
        } finally {
          setIsUploading(false);
        }
      }
    },
    [fieldName, setValue]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
    multiple: false,
  });
  return (
    <div>
      <div
        {...getRootProps()}
        className={`cursor-pointer select-none hover:bg-white/20 hover:scale-105 transition-all duration-250 w-full flex flex-col items-center justify-center rounded-lg border border-dashed max-w-[320px] max-h-[200px] p-6 ${
          error ? "border-red-500" : "border-primario300"
        } ${isDragActive ? "bg-white/20" : "bg-white-10"}`}
      >
        <input {...getInputProps()} />
        {isUploading ? (
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primario300" />
        ) : (
          <UploadIcon />
        )}
        <p
          className={`pt-3 font-medium text-xs ${
            error ? "text-red-500" : "text-primario300"
          } text-center`}
        >
          {isUploaded
            ? "¡Imagen cargada correctamente!"
            : `Sube un archivo PDF como material complementario`}
        </p>
        <p className="font-medium text-xs text-center pt-2">
          {isDragActive
            ? "Suelta el archivo aquí"
            : isUploaded
            ? "Puedes subir otra archivo"
            : "Arrastre o haga click aqui para subir los archivos"}
        </p>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default UploadPDFFileInput;
