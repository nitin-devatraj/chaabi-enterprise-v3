import React from "react";
import styles from "./Notifications.module.scss";
import NotificationItem from "./NotificationItem/NotificationItem";

function Notifications({ tabs }) {
  return (
    <div className={styles.notificationContainer}>
      {tabs.map((item) => (
        <NotificationItem item={item} />
      ))}
    </div>
  );
}

export default Notifications;
