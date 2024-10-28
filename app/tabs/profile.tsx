import ProfileScreenHeader from "@/components/ProfileScreen/ProfileScreenHeader";
import { profileScreenStyles } from "@/styles/profileScreen.styles";
import React from "react";
import { View } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={profileScreenStyles.container}>
      <ProfileScreenHeader />
    </View>
  );
};

export default ProfileScreen;
