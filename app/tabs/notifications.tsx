import NotificationsHeader from "@/components/NotificationScreen/NotificationsHeader";
import { homeScreenStyles } from "@/styles/homeScreen.styles";
import React from "react";
import { View } from "react-native";

const NotificationsScreen = () => {
  return (
    <View style={homeScreenStyles.container}>
      <NotificationsHeader />
    </View>
  );
};

export default NotificationsScreen;
