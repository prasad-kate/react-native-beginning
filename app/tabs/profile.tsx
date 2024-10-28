import ProfileDetailsSection from "@/components/ProfileScreen/ProfileDetailsSection";
import ProfileOptionsSection from "@/components/ProfileScreen/ProfileOptionsSection";
import ProfileScreenHeader from "@/components/ProfileScreen/ProfileScreenHeader";
import { profileScreenStyles } from "@/styles/profileScreen.styles";
import React from "react";
import { View } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={profileScreenStyles.container}>
      <ProfileScreenHeader />
      <ProfileDetailsSection />
      <ProfileOptionsSection />
    </View>
  );
};

export default ProfileScreen;
