import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import React, { useState } from "react";
import { Switch, Text, View } from "react-native";
import SettingsTitle from "./SettingsTitle";

const NotificationSettings = () => {
  const [notificationSettings, setNotificationSettings] = useState({
    sales: false,
    newArrivals: true,
    deliveryStatus: false,
  });
  const toggleSwitch = (name: "sales" | "newArrivals" | "deliveryStatus") => {
    setNotificationSettings((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };
  return (
    <View>
      <View
        style={{
          ...detailsScreenStyles.settingsTitleContainer,
          marginTop: 40,
        }}
      >
        <SettingsTitle title="Notifications" />
      </View>

      <View style={detailsScreenStyles.notificationSettingCard}>
        <Text style={detailsScreenStyles.notificationsSettingTitle}>Sales</Text>
        <Switch
          value={notificationSettings.sales}
          onChange={() => {
            toggleSwitch("sales");
          }}
        />
      </View>
      <View style={detailsScreenStyles.notificationSettingCard}>
        <Text style={detailsScreenStyles.notificationsSettingTitle}>
          New Arrivals
        </Text>
        <Switch
          value={notificationSettings.newArrivals}
          onChange={() => {
            toggleSwitch("newArrivals");
          }}
        />
      </View>
      <View style={detailsScreenStyles.notificationSettingCard}>
        <Text style={detailsScreenStyles.notificationsSettingTitle}>
          Delivery Status Changes
        </Text>
        <Switch
          value={notificationSettings.deliveryStatus}
          onChange={() => {
            toggleSwitch("deliveryStatus");
          }}
        />
      </View>
    </View>
  );
};

export default NotificationSettings;
