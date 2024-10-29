import { notificationScreenStyles } from "@/styles/notificationScreen.styles";
import React from "react";
import { Text } from "react-native";

const NotificationsHeader = () => {
  return (
    <Text style={notificationScreenStyles.headerText} numberOfLines={1}>
      Notifications
    </Text>
  );
};

export default NotificationsHeader;