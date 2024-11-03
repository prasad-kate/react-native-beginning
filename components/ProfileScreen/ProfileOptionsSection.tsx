import { profileScreenOptions } from "@/constants/profileScreenConstants";
import React from "react";
import { FlatList } from "react-native";
import ProfileOptionCard from "./ProfileOptionCard";

const ProfileOptionsSection = () => {
  return (
    <FlatList
      data={profileScreenOptions}
      keyExtractor={({ navigationPath }) => navigationPath}
      renderItem={({ item }) => {
        const { name, description, navigationPath } = item;
        return (
          <ProfileOptionCard
            name={name}
            description={description}
            navigationPath={navigationPath}
          />
        );
      }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ProfileOptionsSection;
