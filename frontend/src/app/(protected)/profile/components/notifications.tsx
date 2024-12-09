import { getServerSideToken } from "@/utils/authentications";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";

// Define los tipos de datos esperados para las notificaciones
interface Notification {
  _id: string;
  message: string;
  type: string;
  createdAt: string;
  read: boolean;
}

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const token = await getServerSideToken();
        if (!token) {
          throw new Error("Token no encontrado");
        }

        const url = `${process.env.NEXT_PUBLIC_API_ROOT}/notifications`;
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Error al obtener las notificaciones");
        }

        const data = await res.json();
        const notificationsData: Notification[] = data.notifications;
        setNotifications(notificationsData);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message || "Error desconocido");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const markAsRead = async (notificationId: string) => {
    try {
      const token = await getServerSideToken();
      if (!token) {
        throw new Error("Token no encontrado");
      }

      const url = `${process.env.NEXT_PUBLIC_API_ROOT}/notifications/mark-as-read/${notificationId}`;
      const res = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Error al marcar la notificación como leída");
      }

      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification._id === notificationId
            ? { ...notification, read: true }
            : notification
        )
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "Error desconocido");
    }
  };

  return (
    <div className="max-w-3xl p-4 col-span-4 w-full">
      {isLoading ? (
        <p className="text-center">Cargando notificaciones...</p>
      ) : error ? (
        <p className="text-red-500 text-center">Error: {error}</p>
      ) : notifications.length > 0 ? (
        <div className="flex flex-col justify-start items-start w-screen">
          <h1 className="text-2xl font-bold text-center mb-4">
            Notificaciones
          </h1>
          <div className="flex flex-wrap w-full gap-10">
            {notifications.map((notification) => (
              <div
                key={notification._id}
                className={`p-3 mb-3 rounded-lg shadow-md transition-colors duration-300 w-[450px] ${
                  notification.read ? "bg-gray-800" : "bg-gray-"
                } border ${
                  notification.read ? "border-gray-400" : "border-gray-300"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h2 className="text-md font-semibold">
                      {notification.message}
                    </h2>
                    <p className="text-xs text-gray-200">
                      Tipo: {notification.type}
                    </p>
                    <p className="text-xs text-gray-200">
                      Fecha: {new Date(notification.createdAt).toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-200">
                      Leído: {notification.read ? "Sí" : "No"}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    {!notification.read && (
                      <Button
                        variant="bordered"
                        className="ml-3 px-2 py-1 border-primario500 text-primario500 hover:border-primario300 hover:text-primario300 transition"
                        onClick={() => markAsRead(notification._id)}
                      >
                        Marcar como leída
                      </Button>
                    )}
                    {notification.type === "Curso Creado" && (
                      <button>Ver curso</button>
                    )}
                    {notification.type === "Solicitud de vendedor" && (
                      <Button className="px-2 bg-primario500 text-white">
                        Aprobar vendedor
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center">No hay notificaciones disponibles.</p>
      )}
    </div>
  );
}
