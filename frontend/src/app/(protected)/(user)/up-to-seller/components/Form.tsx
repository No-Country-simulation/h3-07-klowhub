"use client";
import { Button } from "@nextui-org/button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import SvgCheck from "./SvgCheck";
import DashCard from "@/components/cards/DashCard";
import { Divider, Select, SelectItem, Switch } from "@nextui-org/react";
import CardShopMembership from "@/components/cards/shop/CardShopMembership";
import { useEffect, useState } from "react";

type Inputs = {
  period: boolean;
  planType: string;
  sellerType: string;
  description: string;
  portfolio: string;
  preferedPaymentMethod: string;
  idFront: string;
  idBack: string;
};
enum steps {
  "suscriptiontype",
  "data",
  "payment",
}

const SellerUpgradeForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      planType: "Starter",
      period: false,
    },
  });
  const [step, setStep] = useState<steps>(steps.data);
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const planes = [
    {
      id: 1,
      plan: "Starter",
      image: "/assets/backgrounds/basicPlan.png",
      price: "Free",
    },
    {
      id: 2,
      plan: "Professional",
      image: "/assets/backgrounds/professionalPlan.png",
      price: "$9,99",
    },
    {
      id: 3,
      plan: "Expert",
      image: "/assets/backgrounds/expertPlan.png",
      price: "$19,99",
    },
  ];
  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      console.log("Form values:", value);
      console.log("Changed field:", name);
      console.log("Type of change:", type);
    });

    // Cleanup subscription
    return () => subscription.unsubscribe();
  }, [watch]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {step === steps.suscriptiontype && (
        <>
          <DashCard>
            <div className="flex flex-col gap-4 ">
              <h1 className="font-bold">
                ¡Bienvenido a la comunidad de Vendedores!
              </h1>
              <p className="text-sm font-normal">
                Elige el plan que mejor se adapte a tus necesidades y comienza a
                monetizar tus creaciones. Desde el plan gratuito hasta las
                opciones premium, cada uno ofrece herramientas diseñadas para
                maximizar tu éxito como creador.
              </p>
              <h3 className="text-sm font-semibold">
                Detalle del plan seleccionado:
              </h3>
              <p className="text-sm">
                A continuación, encontrarás una descripción detallada de las
                características y beneficios del plan que has elegido.
              </p>
            </div>
            <DashCard classNames="my-6">
              {/**BILLING PERIOD */}
              <div className="billing-container group flex justify-center py-3 items-center gap-3 text-sm">
                <span
                  className={`${
                    !watch("period") ? "text-primario300" : "text-white"
                  }`}
                >
                  Facturación mensual
                </span>
                <Switch
                  {...register("period")}
                  size="sm"
                  color="secondary"
                  aria-label="Toggle billing period"
                />
                <span
                  className={`${
                    !watch("period") ? "text-white" : "text-primario300"
                  }`}
                >
                  Facturación anual (ahorra el 15%)
                </span>
              </div>
              <Divider />
              <div className="flex gap-6 justify-center my-20">
                {planes &&
                  planes.map((plan) => (
                    <label key={plan.plan}>
                      <input
                        type="radio"
                        {...register("planType", { required: true })}
                        value={plan.plan}
                        className="sr-only"
                      />
                      <CardShopMembership
                        key={plan.id}
                        image={plan.image}
                        price={plan.price}
                        plan={plan.plan}
                        isSelected={watch("planType") === plan.plan}
                      >
                        <ul className="list-disc pl-6 marker:text-primario400 marker:text-3xl py-6">
                          <li>Acceso limitado a funciones básicas</li>
                          <li>
                            Ideal para principiantes que desean explorar la
                            Plataforma
                          </li>
                          <li>Soporte por correo electrónico</li>
                          <li>
                            Uso de plantillas predefinidas y recursos básicos
                          </li>
                        </ul>
                      </CardShopMembership>
                    </label>
                  ))}
              </div>
            </DashCard>
            <div className="mb-12 rounded-lg bg-transparent border border-primario400 grid grid-cols-4 text-center justify-center place-items-center items-center">
              <div className="text-start pl-8 py-7 border border-primario400 w-full">
                Comparar Planes
              </div>
              <div className="border border-primario400 w-full h-full inline-grid justify-self-center items-center">
                Free
              </div>
              <div className="border border-primario400 w-full h-full inline-grid justify-self-center items-center">
                $9,99 / mes
              </div>
              <div className="border border-primario400 w-full h-full inline-grid justify-self-center items-center">
                $19,99 /mes
              </div>
              <div className="text-start pl-8 py-7 border border-primario400 w-full">
                Aspecto
              </div>
              <div className="border border-primario400 w-full h-full inline-grid justify-self-center items-center">
                Perfecto para quienes recién empiezan y quieran explorar la
                plataforma
              </div>
              <div className="border border-primario400 w-full h-full inline-grid justify-self-center items-center">
                Desbloquea funcionalidades avanzadas y personaliza tu
                experiencia
              </div>
              <div className="border border-primario400 w-full h-full inline-grid justify-self-center items-center">
                Accede a todas nuestras funciones exclusivas y maximiza tu
                potencial como creador
              </div>

              <div className="text-start pl-8 py-7 border border-primario400 w-full">
                Cantidad de publicaciones
              </div>
              <div className="border border-primario400 w-full h-full inline-grid justify-self-center items-center">
                Publica hasta 3 aplicaciones
              </div>
              <div className="border border-primario400 w-full h-full inline-grid justify-self-center items-center">
                Publica hasta 10 aplicaciones
              </div>
              <div className="border border-primario400 w-full h-full inline-grid justify-self-center items-center">
                Publicaciones ilimitadas
              </div>

              <div className="text-start pl-8 py-7 border border-primario400 w-full">
                Análisis avanzado y personalizado
              </div>
              <div className="border border-primario400 w-full h-full inline-grid justify-self-center items-center">
                {""}
              </div>
              <div className="border border-primario400 w-full h-full inline-grid justify-self-center items-center">
                {""}
              </div>
              <div className="border border-primario400 w-full h-full inline-grid items-center  justify-center">
                <SvgCheck />
              </div>

              <div className="text-start pl-8 py-7 border border-primario400 w-full">
                Soporte exclusivo 24/7
              </div>
              <div className="border border-primario400 w-full h-full inline-grid justify-self-center items-center">
                {""}
              </div>
              <div className="border border-primario400 w-full h-full inline-grid items-center justify-center">
                <SvgCheck />
              </div>
              <div className="border border-primario400 w-full h-full inline-grid items-center justify-center">
                <SvgCheck />
              </div>
            </div>
          </DashCard>
          <div className="py-6 flex w-full justify-end">
            <Button
              variant="solid"
              style={{
                background: "#702486",
                color: "white",
                borderRadius: "8px",
                padding: "14px 90px",
              }}
              onClick={() => setStep(steps.data)}
            >
              Continuar
            </Button>
          </div>
        </>
      )}
      {step === steps.data && (
        <DashCard classNames="px-6">
          <section className="py-14 flex flex-col gap-3">
            <h2 className="font-bold">Completa tu perfil de vendedor</h2>
            <p className="text-sm font-normal">
              Estamos a solo un paso de completar tu perfil de vendedor.
              Proporciónanos algunos detalles adicionales para poder validar tu
              identidad y ofrecerte la mejor experiencia como creador en nuestra
              plataforma.
            </p>
          </section>
          <section className="grid grid-cols-2">
            <div className="gap-4">
              <h2 className="font-bold mb-6">
                Selecciona el tipo de vendedor que eres.
              </h2>
              <Controller
                name="sellerType"
                control={control}
                rules={{ required: "Este campo es requerido" }}
                render={({ field, fieldState: { error } }) => (
                  <Select
                    {...field}
                    label="Tipo de vendedor"
                    placeholder="Selecciona una opción"
                    className="max-w-xs"
                    variant="faded"
                    isInvalid={!!error}
                    errorMessage={error?.message}
                    classNames={{
                      trigger: "h-10",
                      value: "text-small text-black",
                      label: "text-small font-medium",
                    }}
                  >
                    {[
                      { value: "developer", label: "Desarrollador de apps" },
                      {
                        value: "contentCreator",
                        label: "Creador de contenido educativo",
                      },
                      { value: "developerTeam", label: "Equipo de desarrollo" },
                      { value: "appsheetExpert", label: "Experto en AppSheet" },
                      { value: "other", label: "Otro" },
                    ].map((item) => (
                      <SelectItem
                        className="text-black hover:bg-primario200 "
                        key={item.value}
                        value={item.value}
                      >
                        {item.label}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              <h2 className="mt-8 font-bold">
                Escribe una breve descripción de ti o de tu empresa
              </h2>
              <p className="my-6 text-sm">
                Esta será la información que los compradores verán cuando
                visiten tu perfil. Te recomendamos incluir tus áreas de
                experiencia y los tipos de soluciones que ofreces.
              </p>
            </div>
            <div></div>
          </section>
        </DashCard>
      )}
    </form>
  );
};

export default SellerUpgradeForm;