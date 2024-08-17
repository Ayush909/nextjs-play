import Card from "@/app/components/card";
import Link from "next/link";
import React from "react";

const ArchivedNotification = () => {
  return (
    <Card>
      <div>Archived Notification</div>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
};

export default ArchivedNotification;
