import NotificationsCardSection from "@/components/NotificationScreen/NotificationsCardSection";
import NotificationsHeader from "@/components/NotificationScreen/NotificationsHeader";
import { homeScreenStyles } from "@/styles/homeScreen.styles";
import React from "react";
import { View } from "react-native";

const NotificationsScreen = () => {
  return (
    <View style={homeScreenStyles.container}>
      <NotificationsHeader />
      <NotificationsCardSection />
    </View>
  );
};

export default NotificationsScreen;
