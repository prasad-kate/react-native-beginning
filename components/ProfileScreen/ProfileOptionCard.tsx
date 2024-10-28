import { profileScreenStyles } from "@/styles/profileScreen.styles";
import { ProfileOptionCardProps } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ProfileOptionCard = ({
  name,
  description,
  navigationPath,
}: ProfileOptionCardProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={profileScreenStyles.optionsContainer}
    >
      <View>
        <Text style={profileScreenStyles.optionName}>{name}</Text>
        <Text style={profileScreenStyles.optionDescription}>{description}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#242424" />
    </TouchableOpacity>
  );
};

export default ProfileOptionCard;
