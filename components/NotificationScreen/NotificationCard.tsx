import { notificationScreenStyles } from "@/styles/notificationScreen.styles";
import { NotificationsCardProps } from "@/types";
import React from "react";
import { Image, Text, View } from "react-native";

const NotificationCard = ({
  title,
  description,
  image,
}: NotificationsCardProps) => {
  return (
    <View style={notificationScreenStyles.cardContainer}>
      <View style={notificationScreenStyles.productDetailsContainer}>
        <Image source={image} style={notificationScreenStyles.productImage} />
        <View style={notificationScreenStyles.textContainer}>
          <Text style={notificationScreenStyles.productTitle} numberOfLines={3}>
            {title}
          </Text>
          <Text
            style={notificationScreenStyles.productDescription}
            numberOfLines={3}
          >
            {description}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NotificationCard;
