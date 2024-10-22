import React from "react";
import { ImageBackground, Text, View } from "react-native";
import Button from "../ui/Button";
import { boardingStyles } from "./styles/boarding.styles";

const Boarding = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/furniture-app-first-bg.png")}
      style={boardingStyles.backgroundImage}
      resizeMode="cover"
    >
      <View style={boardingStyles.textContainer}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "baseline",
            gap: 8,
          }}
        >
          <Text style={boardingStyles.textMakePart}>Make Your Home</Text>
          <Text style={boardingStyles.textBeautiful}>Beautiful</Text>
        </View>
        <Text style={boardingStyles.textDescription}>
          The best simple place where you discover most wonderful furnitures and
          make your home beautiful
        </Text>
      </View>
      <View style={boardingStyles.boardingButtonContainer}>
        <Button text="Get Started" />
      </View>
    </ImageBackground>
  );
};

export default Boarding;
