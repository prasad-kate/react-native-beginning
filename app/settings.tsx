import PasswordSettings from "@/components/Settings/PasswordSettings";
import PersonalInfoSettings from "@/components/Settings/PersonalInfoSettings";
import SettingsScreenHeader from "@/components/Settings/SettingsScreenHeader";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import React from "react";
import { View } from "react-native";

const Settings = () => {
  return (
    <View style={detailsScreenStyles.container}>
      <SettingsScreenHeader />
      <PersonalInfoSettings />
      <PasswordSettings />
    </View>
  );
};

export default Settings;
