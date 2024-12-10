interface NavTabsProps {
  view: string;
  setView: (view: string) => void;
}

const NavTabs: React.FC<NavTabsProps> = ({ view, setView }) => {
  enum vistas {
    estadisticas = "Estadísticas",
    alertas = "Alertas y Notificaciones",
    configuracion = "Configuración rápida",
  }

  const tabs = Object.values(vistas);

  return (
    <div className="flex w-full justify-between">
      {tabs.map((tab) => (
        <p
          key={tab}
          className={`cursor-pointer mx-5 mb-2 py-5 px-3 text-center text-lg font-bold ${
            view === tab ? "bg-white/20 rounded-2xl" : ""
          }`}
          onClick={() => setView(tab)}
        >
          {tab}
        </p>
      ))}
    </div>
  );
};

export default NavTabs;
