import { NotificationsList } from "@/components/notifications/notifications-list";
import { getNotifications } from "@/utils/notifications/getNotification";

const page = async () => {
  try {
    const notifications = await getNotifications();

    return <NotificationsList notifications={notifications.notifications} />;
  } catch (error) {
    console.log(error);
    return <div>Error page</div>;
  }
};

export default page;
