import { NotificationsList } from "../../../components/notifications/notifications-list";

async function getNotifications() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/notifications`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Error al obtener las notificaciones");
  }

  return res.json();
}

export default async function ProfilePage() {
  const notifications = await getNotifications();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Perfil</h1>
      <NotificationsList notifications={notifications} />
    </div>
  );
}
