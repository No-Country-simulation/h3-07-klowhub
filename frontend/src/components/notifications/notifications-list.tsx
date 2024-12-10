"use client";
import { Button } from "@nextui-org/button";
import { Notification } from "../../types/notifications";

interface NotificationsListProps {
  notifications: Notification[];
  _id?: number;
}

export function NotificationsList(notifications: NotificationsListProps) {
  console.log(notifications.notifications);

  return (
    <div className="space-y-4 my-10">
      <h2 className="text-2xl font-bold">Notificaciones</h2>
      {notifications && notifications.notifications.length > 0 ? (
        <ul className="space-y-4" key={notifications.notifications[0].id}>
          {notifications.notifications.map((notification) => (
            <li
              key={notification.id}
              className="p-4 border rounded-lg flex items-center justify-between"
            >
              <div>
                <h3 className="font-semibold">{notification.type}</h3>
                <p className="text-gray-600">{notification.message}</p>
                <small className="text-gray-500">
                  {new Date(notification.createdAt).toLocaleString()}
                </small>
              </div>
              <div className="flex gap-6 text-primario500">
                <Button variant="solid" className="text-white bg-primario500">
                  Autorizar
                </Button>
                <Button
                  variant="bordered"
                  className="text-primario500 border-primario500"
                >
                  Denegar
                </Button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No tienes notificaciones.</p>
      )}
    </div>
  );
}
