import { notificationsList } from "@/constants/notificationScreenConstants";
import React from "react";
import { ScrollView } from "react-native";
import NotificationCard from "./NotificationCard";

const NotificationsCardSection = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {notificationsList?.map(({ title, description, image }, index) => {
        return (
          <NotificationCard
            key={index}
            title={title}
            description={description}
            image={image}
          />
        );
      })}
    </ScrollView>
  );
};

export default NotificationsCardSection;
