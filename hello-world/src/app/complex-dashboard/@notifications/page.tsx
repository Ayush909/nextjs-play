import Card from "@/app/components/card";
import Link from "next/link";

const Notifications = () => {
  return (
    <Card>
      <div>Notification</div>
      <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
  );
};

export default Notifications;
