import DashCard from "@/components/cards/DashCard";

export default function ConfigurationView() {
  return (
    <section className="bg-[#1F2937] rounded-lg shadow-lg p-4 sm:p-6">
      <h2 className="text-xl font-bold mb-4">Precios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <DashCard classNames="w-full">
          <h3 className="font-semibold text-sm sm:text-base mb-2">Precio mínimo por curso</h3>
          <input 
            type="number" 
            className="w-full p-2 rounded bg-gray-700 text-white"
            placeholder="Ingrese precio mínimo"
          />
        </DashCard>
        <DashCard classNames="w-full">
          <h3 className="font-semibold text-sm sm:text-base mb-2">Precio máximo por curso</h3>
          <input 
            type="number" 
            className="w-full p-2 rounded bg-gray-700 text-white"
            placeholder="Ingrese precio máximo"
          />
        </DashCard>
      </div>
    </section>
  );
}

