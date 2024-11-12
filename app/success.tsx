import Button from "@/components/ui/Button";
import { successScreenStyles } from "@/styles/successScreen.styles";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { BackHandler, Image, ImageBackground, Text, View } from "react-native";

const Success = () => {
  const router = useRouter();

  // to prevent back button navigation
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => true
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={successScreenStyles.container}>
      {/* success title section */}
      <Text style={successScreenStyles.successText}>Success!</Text>

      {/* success image section */}
      <ImageBackground
        style={successScreenStyles.successImageBackgroundContainer}
        source={require("@/assets/images/success-screen-background-img.png")}
        resizeMode="contain"
      >
        <Image
          source={require("@/assets/images/success-screen-img.png")}
          style={successScreenStyles.successImageBackground}
          resizeMode="contain"
        />
        <Image
          source={require("@/assets/images/success-icon.png")}
          style={successScreenStyles.successIcon}
          resizeMode="contain"
        />
      </ImageBackground>

      {/* order details text */}
      <Text style={successScreenStyles.orderText} numberOfLines={2}>
        Your order will be delivered soon.{"\n"}Thank you for choosing our app!
      </Text>

      {/* buttons section */}
      <View style={successScreenStyles.buttonsContainer}>
        <Button
          text="Track your orders"
          style={successScreenStyles.trackYourOrderButton}
          onPress={() => {
            router.push({
              pathname: "/orderDetails",
              params: { preventBackNavigation: "true" },
            });
          }}
        />
        <Button
          text="Back to home"
          style={successScreenStyles.backHomeButton}
          buttonTextStyles={successScreenStyles.backHomeButtonText}
          onPress={() => {
            router.push("/tabs/home");
          }}
        />
      </View>
    </View>
  );
};

export default Success;
