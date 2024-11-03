import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { SettingTitleProps } from "@/types";
import React from "react";
import { Text } from "react-native";

const SettingsTitle = ({ title }: SettingTitleProps) => {
  return <Text style={detailsScreenStyles.settingsTitle}>{title}</Text>;
};

export default SettingsTitle;
