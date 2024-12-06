import DashCard from "@/components/cards/DashCard";
import CardShop from "@/components/cards/shop/CardShop";
import { useState } from "react";
import { UseFormSetValue } from "react-hook-form";

const Promotions = ({
  combine,
  setValue,
}: {
  combine: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: UseFormSetValue<any>;
}) => {
  const [resourceType, setResourceType] = useState<string>("Aplicaciones");
  return (
    <div>
      <h2 className="py-6 text-sm font-semibold">
        Fusiona tus cursos y apps, expande tus posibilidades
      </h2>
      <p className="text-sm">
        En AppSheetHub, te damos la libertad de combinar tus aplicaciones y
        cursos para crear soluciones únicas y personalizadas. No te limites a
        una sola herramienta: potencia tu creatividad uniendo conocimientos y
        funcionalidades para lograr un impacto mayor. Diseña, comparte y aprende
        como nunca antes. ¡El límite lo pones vos!
      </p>
      <div>
        <h2 className="text-sm font-semibold py-6">
          ¿Que te gustaría combinar?
        </h2>
        <div className="flex flex-col gap-4 justify-center mb-6">
          <label htmlFor="si" className="text-sm px-2">
            <input
              type="radio"
              name="promotion"
              id="si"
              className="mr-6"
              onChange={() => setValue("promotion", true)}
            />
            Si
          </label>
          <label htmlFor="no" className="text-sm px-2">
            <input
              type="radio"
              name="promotion"
              id="no"
              className="mr-6"
              onChange={() => {
                setValue("promotion", false);
                setValue("discount", null);
              }}
            />
            No
          </label>
        </div>
        {combine && (
          <>
            <DashCard classNames="">
              <h2>Selecciona la app o curso que quieras incluir</h2>
              <div className="flex text-sm font-semibold">
                <div
                  className={`border-b ${
                    resourceType === "Aplicaciones"
                      ? "border-b-primario300"
                      : "border-b-white"
                  } py-1`}
                >
                  <p
                    onClick={() => setResourceType("Aplicaciones")}
                    className={`text-sm font-semibold px-4 cursor-pointer select-none ${
                      resourceType === "Aplicaciones"
                        ? "text-primario300"
                        : "text-white"
                    }`}
                  >
                    Aplicaciones
                  </p>
                </div>
                <div
                  className={`border-b ${
                    resourceType === "Cursos"
                      ? "border-b-primario300"
                      : "border-b-white"
                  } py-1`}
                >
                  <p
                    onClick={() => setResourceType("Cursos")}
                    className={`text-sm font-semibold px-4 cursor-pointer select-none ${
                      resourceType === "Cursos"
                        ? "text-primario300"
                        : "text-white"
                    }`}
                  >
                    Cursos
                  </p>
                </div>
              </div>
              {resourceType === "Aplicaciones" && (
                <div className="py-8 flex gap-6 flex-wrap">
                  <CardShop isFor="app" />
                  <CardShop isFor="app" />
                </div>
              )}
              {resourceType === "Cursos" && (
                <div className="py-8 flex gap-6 flex-wrap">
                  <CardShop isFor="course" />
                  <CardShop isFor="course" />
                </div>
              )}
            </DashCard>
            <div className="py-6 mt-6 flex flex-col">
              <label className="pt-10 pb-6">
                Establecé el porcentaje de descuento que querés ofrecer al crear
                este paquete
              </label>
              <input
                type="text"
                className="h-11 rounded-lg w-1/3 p-2"
                name="discount"
                id="discount"
                placeholder="Ingresa el porcentaje de descuento"
                onChange={(e) => setValue("discount", e.target.value)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Promotions;
