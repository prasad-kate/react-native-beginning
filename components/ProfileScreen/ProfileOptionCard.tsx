import { profileScreenStyles } from "@/styles/profileScreen.styles";
import { ProfileOptionCardProps } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { Href, useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ProfileOptionCard = ({
  name,
  description,
  navigationPath,
}: ProfileOptionCardProps) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={profileScreenStyles.optionsContainer}
      onPress={() => {
        router.push(navigationPath as Href<string>);
      }}
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
