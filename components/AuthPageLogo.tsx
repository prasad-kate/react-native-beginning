import { uiStyles } from "@/styles/global.styles";
import { registerUserStyles } from "@/styles/registerUser.styles";
import React from "react";
import { Image, View } from "react-native";

const AuthPageLogo = () => {
  return (
    <View style={registerUserStyles.authPageIconContainer}>
      <View
        style={[
          uiStyles.hr,
          {
            maxWidth: 105,
          },
        ]}
      />
      <Image
        source={require("@/assets/images/auth-page-icon.png")}
        resizeMode="cover"
      />
      <View
        style={[
          uiStyles.hr,
          {
            maxWidth: 105,
          },
        ]}
      />
    </View>
  );
};

export default AuthPageLogo;
