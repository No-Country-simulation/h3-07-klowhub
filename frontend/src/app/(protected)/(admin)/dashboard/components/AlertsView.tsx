import Notifications from "@/app/(protected)/profile/components/notifications";
import DashCard from "@/components/cards/DashCard";

export default function AlertsView() {
  return (
    <section className="bg-[#1F2937] rounded-lg shadow-lg p-4 sm:p-6">
      <h2 className="text-xl font-bold mb-4 text-white">
        Alertas y Notificaciones
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <DashCard classNames="w-full">
          <h3 className="font-semibold text-sm sm:text-base">
            Incidentes de seguridad
          </h3>
          <p className="text-primario300 text-2xl sm:text-3xl lg:text-4xl mt-2 text-center">
            20 accesos no autorizados
          </p>
        </DashCard>
        <DashCard classNames="w-full">
          <h3 className="font-semibold text-sm sm:text-base">Usos indebidos</h3>
          <p className="text-primario300 text-2xl sm:text-3xl lg:text-4xl mt-2 text-center">
            100
          </p>
        </DashCard>
        <DashCard classNames="w-full">
          <h3 className="font-semibold text-sm sm:text-base mb-2">
            Publicaciones Pendientes de aprobación
          </h3>
          <ul className="text-primario300 text-sm sm:text-base space-y-1">
            <li className="hover:text-white cursor-pointer">
              MurgaApp - AppSheet
            </li>
            <li className="hover:text-white cursor-pointer">
              Leoncito - PowerApp
            </li>
            <li className="hover:text-white cursor-pointer">
              El mejor aliado de tu App - Publicación
            </li>
            <li className="hover:text-white cursor-pointer">
              Aprendiendo PowerApp - Curso
            </li>
            <li className="hover:text-white cursor-pointer">
              AlCaféCafé - AppShare
            </li>
          </ul>
        </DashCard>
      </div>
      <Notifications />
    </section>
  );
}
