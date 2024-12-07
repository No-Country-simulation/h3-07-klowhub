import { Notification } from "../../types/notifications";

interface NotificationsListProps {
  notifications: Notification[];
}

export function NotificationsList({ notifications }: NotificationsListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Notificaciones</h2>
      {notifications && notifications.length > 0 ? (
        <ul className="space-y-4">
          {notifications.map((notification) => (
            <li key={notification.id} className="p-4 border rounded-lg">
              <h3 className="font-semibold">{notification.title}</h3>
              <p className="text-gray-600">{notification.message}</p>
              <small className="text-gray-500">
                {new Date(notification.timestamp).toLocaleString()}
              </small>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No tienes notificaciones.</p>
      )}
    </div>
  );
}
