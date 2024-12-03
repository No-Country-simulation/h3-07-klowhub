import DashCard from "@/components/cards/DashCard";
import QuestionCard from "@/components/cards/questionsCards/QuestionCard";
import CardShop from "@/components/cards/shop/CardShop";
import ProgressCard from "@/components/cards/shop/ProgressCard";
import CardSection from "@/components/common/CardSection";
import SelectorButtons from "@/components/dashboardSelector/SelectorButtons";
import React from "react";

const UserPage = () => {
  return (
    <div className="">
      <div className="grid grid-cols-4 gap-6 h-24">
        <SelectorButtons
          background="/assets/backgrounds/Button1.png"
          url=""
          title="Aprende en KlowHub"
        />

        <SelectorButtons
          background="/assets/backgrounds/Button2.png"
          url=""
          title="Encuentra aplicaciones"
        />
        <SelectorButtons
          background="/assets/backgrounds/Button1.png"
          url=""
          title="Publica proyectos"
        />
        <SelectorButtons
          background="/assets/backgrounds/Button1.png"
          url=""
          title="Consultas técnicas"
        />
      </div>
      <div className="py-16">
        <CardSection
          title="Continuá tu aprendizaje"
          description="Retomá donde lo dejaste. Volvé a ver tu último video y seguí aprendiendo sin perder el ritmo."
          button={false}
        >
          <ProgressCard />
        </CardSection>
      </div>
      <div className="pb-12">
        <CardSection
          title="Cursos recomendados"
          description="Descubre los cursos más destacados y lleva tus habilidades al siguiente nivel. Aprende de expertos y aplica tus conocimientos en proyectos reales."
        >
          <CardShop isFor="course" />
          <CardShop isFor="course" platform="Power Apps" />
          <CardShop isFor="course" platform="AppSheet" />
        </CardSection>
      </div>
      <CardSection
        title="Aplicaciones recomendadas"
        description="Explorá soluciones listas para usar. Encontrá la app perfecta para tu proyecto y empezá a trabajar de inmediato."
      >
        <CardShop isFor="app" />
        <CardShop isFor="app" platform="Power Apps" />
        <CardShop isFor="app" />
        <CardShop isFor="app" />
      </CardSection>
      <section className="py-10 px-6">
        <h2 className="text-xl font-bold py-6">Ultimas consultas</h2>
        <DashCard classNames="flex flex-col">
          <DashCard classNames="grid grid-cols-7">
            <p className="col-span-3">Consulta</p>
            <p className="text-center">Autor</p>
            <p className="text-center">Fecha</p>
            <p className="text-center">Plataforma</p>
            <p className="text-center">Estado</p>
          </DashCard>
          <QuestionCard
            title="Como crear y configurar una cuenta en AppSheet"
            contenido="Guía para principiantes. Crea tu propia cuenta y comienza a utilizar esta gran plataforma"
            autor="Rafael"
            fecha="30/11/2024"
            plataforma="AppSheet"
            estado="Solucionado"
          />
          <QuestionCard
            title="Como crear y configurar una cuenta en AppSheet"
            contenido="Guía para principiantes. Crea tu propia cuenta y comienza a utilizar esta gran plataforma"
            autor="Rafael"
            fecha="01/10/2024"
            plataforma="AppSheet"
            estado="Pendiente"
          />
          <QuestionCard
            title="Como crear y configurar una cuenta en AppSheet"
            contenido="Guía para principiantes. Crea tu propia cuenta y comienza a utilizar esta gran plataforma"
            autor="Rafael"
            fecha="30/11/2024"
            plataforma="AppSheet"
            estado="Solucionado"
          />
        </DashCard>
      </section>
    </div>
  );
};

export default UserPage;
