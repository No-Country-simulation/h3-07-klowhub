"use client";

import { useEffect, useState } from "react";
import DashCard from "@/components/cards/DashCard";
import { getUsers } from "@/utils/admin/dashboard/stadistic";
interface User {
  totalUsers: number;
  activeUsers: number;
}
const StatisticsView = () => {
  const [users, setUsers] = useState(null as User | null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      setUsers(data);
    };

    fetchData();
  }, []);

  if (!users) {
    return <div>Cargando estadísticas...</div>;
  }

  return (
    <div className="space-y-6">
      <section className="bg-[#1F2937] rounded-lg shadow-lg p-4 sm:p-6">
        <h2 className="text-xl font-bold mb-4">Usuarios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <DashCard classNames="w-full">
            <h3 className="font-semibold text-sm sm:text-base">
              Total de usuarios
            </h3>
            <p className="text-primario300 text-3xl sm:text-5xl mt-2">
              {users.totalUsers}
            </p>
          </DashCard>
          <DashCard classNames="w-full">
            <h3 className="font-semibold text-sm sm:text-base">
              Total de usuarios activos
            </h3>
            <p className="text-primario300 text-3xl sm:text-5xl mt-2">
              {users.activeUsers}
            </p>
          </DashCard>
          <DashCard classNames="w-full">
            <h3 className="font-semibold text-sm sm:text-base">
              Usuarios nuevos
            </h3>
            <p className="text-primario300 text-3xl sm:text-5xl mt-2">
              {users.activeUsers}
            </p>
          </DashCard>
        </div>
      </section>
    </div>
  );
};

export default StatisticsView;
