import { profileScreenStyles } from "@/styles/profileScreen.styles";
import React from "react";
import { Image, Text, View } from "react-native";

const ProfileDetailsSection = () => {
  return (
    <View style={profileScreenStyles.profileDetailsContainer}>
      <Image
        source={require("@/assets/images/dummy-profile-pic.png")}
        style={profileScreenStyles.profileImage}
      />
      <View style={profileScreenStyles.profileDetailsTextContainer}>
        <Text style={profileScreenStyles.profileName}>Sample Name</Text>
        <Text style={profileScreenStyles.profileEmail}>sample@mail.com</Text>
      </View>
    </View>
  );
};

export default ProfileDetailsSection;
