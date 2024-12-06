import DashCard from "@/components/cards/DashCard";

export default function StatisticsView() {
  return (
    <div className="space-y-6">
      <section className="bg-[#1F2937] rounded-lg shadow-lg p-4 sm:p-6">
        <h2 className="text-xl font-bold mb-4">Usuarios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <DashCard classNames="w-full">
            <h3 className="font-semibold text-sm sm:text-base">
              Total de usuarios activos
            </h3>
            <p className="text-primario300 text-3xl sm:text-5xl mt-2">20</p>
          </DashCard>
          <DashCard classNames="w-full">
            <h3 className="font-semibold text-sm sm:text-base">
              Total de usuarios registrados
            </h3>
            <p className="text-primario300 text-3xl sm:text-5xl mt-2">100</p>
          </DashCard>
          <DashCard classNames="w-full">
            <h3 className="font-semibold text-sm sm:text-base mb-2">
              Nuevos Usuarios
            </h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center">
                <p className="font-semibold text-xs sm:text-sm">Diario</p>
                <p className="text-primario300 text-xl sm:text-2xl">3</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-xs sm:text-sm">Semanal</p>
                <p className="text-primario300 text-xl sm:text-2xl">10</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-xs sm:text-sm">Mensual</p>
                <p className="text-primario300 text-xl sm:text-2xl">30</p>
              </div>
            </div>
          </DashCard>
        </div>
      </section>

      {/* Add more sections here following the same pattern */}
    </div>
  );
}
