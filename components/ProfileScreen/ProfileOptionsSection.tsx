import { profileScreenOptions } from "@/constants/profileScreenConstants";
import React from "react";
import { View } from "react-native";
import ProfileOptionCard from "./ProfileOptionCard";

const ProfileOptionsSection = () => {
  return (
    <View>
      {profileScreenOptions?.map(
        ({ name, description, navigationPath }, index) => {
          return (
            <ProfileOptionCard
              key={index}
              name={name}
              description={description}
              navigationPath={navigationPath}
            />
          );
        }
      )}
    </View>
  );
};

export default ProfileOptionsSection;
