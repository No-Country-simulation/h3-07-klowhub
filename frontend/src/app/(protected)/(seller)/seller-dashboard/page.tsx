import DashCard from "@/components/cards/DashCard";
import SelectorButtons from "@/components/dashboardSelector/SelectorButtons";
import React from "react";

const UserPage = () => {
  return (
    <div>
      <div id="menu" className="grid grid-cols-4 gap-16 w-full h-16">
        <SelectorButtons
          background="/assets/backgrounds/Button1.png"
          title="Mis cursos"
          url="/courses"
        />
        <SelectorButtons
          background="/assets/backgrounds/Button2.png"
          title="Explorar proyectos"
          url="/proyects"
        />
        <SelectorButtons
          background="/assets/backgrounds/Button3.png"
          title="Mis aplicaciones"
          url="/apps"
        />
        <SelectorButtons
          background="/assets/backgrounds/Button4.png"
          title="Consultas técnicas"
          url="/tecnicalIssues"
        />
      </div>
      <DashCard>
        <h2>Mis proyectos</h2>
        <p>
          Revisa los detalles, realiza entregas y mantén la comunicación con el
          creador para asegurar el éxito de tu trabajo.
        </p>
      </DashCard>
    </div>
  );
};

export default UserPage;
