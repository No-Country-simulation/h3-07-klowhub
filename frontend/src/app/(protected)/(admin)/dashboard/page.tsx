"use client";

import { useState, useEffect } from "react";
import StatisticsView from "./components/StatisticsView";
import AlertsView from "./components/AlertsView";
import ConfigurationView from "./components/ConfigurationView";

enum Views {
  Statistics = "Estadísticas",
  Alerts = "Alertas y Notificaciones",
  Configuration = "Configuración rápida",
}

export default function DashPage() {
  const [view, setView] = useState<Views | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setView(Views.Statistics);
  }, []);

  if (!isClient) {
    return null; // or a loading indicator
  }

  return (
    <div className="pt-4 pb-16 select-none">
      <div className="flex flex-col sm:flex-row w-full justify-between mb-6">
        {Object.values(Views).map((v) => (
          <button
            key={v}
            className={`cursor-pointer mx-2 sm:mx-5 mb-2 py-3 sm:py-5 px-3 text-center text-sm sm:text-lg font-bold rounded-xl transition-colors ${
              view === v ? "bg-white/20" : "hover:bg-white/10"
            }`}
            onClick={() => setView(v)}
          >
            {v}
          </button>
        ))}
      </div>
      <div className="px-4 sm:px-6 lg:px-8">
        {view === Views.Statistics && <StatisticsView />}
        {view === Views.Alerts && <AlertsView />}
        {view === Views.Configuration && <ConfigurationView />}
      </div>
    </div>
  );
}
