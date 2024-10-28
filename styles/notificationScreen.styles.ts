import { StyleSheet } from "react-native";
import { homeScreenStyles } from "./homeScreen.styles";

export const notificationScreenStyles = StyleSheet.create({
  // header styles
  headerText: {
    ...homeScreenStyles.headerMakeHomeText,
    textAlign: "center",
    flex: 1,
  },
});
