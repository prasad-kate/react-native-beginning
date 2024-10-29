import { notificationsList } from "@/constants/notificationScreenConstants";
import React from "react";
import { FlatList } from "react-native";
import NotificationCard from "./NotificationCard";

const NotificationsCardSection = () => {
  return (
    <FlatList
      data={notificationsList}
      keyExtractor={(_, index) => `${index}`}
      renderItem={({ item }) => {
        return (
          <NotificationCard
            title={item.title}
            description={item.description}
            image={item.image}
          />
        );
      }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default NotificationsCardSection;
