import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import SettingsTitle from "./SettingsTitle";

const PasswordSettings = () => {
  return (
    <View>
      <View
        style={{
          ...detailsScreenStyles.settingsTitleContainer,
          marginTop: 40,
        }}
      >
        <SettingsTitle title="Password" />
        <TouchableOpacity activeOpacity={0.6}>
          <Ionicons name="create" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={detailsScreenStyles.settingsDetailCard}>
        <Text style={detailsScreenStyles.settingsDetailsTitle}>Name</Text>
        <Text style={detailsScreenStyles.settingsDetailsValue}>
          {"****************"}
        </Text>
      </View>
    </View>
  );
};

export default PasswordSettings;
