import { StyleSheet } from "react-native";
import { uiStyles } from "./global.styles";

export const successScreenStyles = StyleSheet.create({
  container: {
    paddingVertical: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
  },
  successText: {
    color: "#303030",
    fontWeight: "bold",
    fontSize: 36,
    textTransform: "uppercase",
    letterSpacing: 5,
  },
  successImageBackgroundContainer: {
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  successImageBackground: {
    width: 200,
    height: 200,
  },
  successIcon: {
    width: 40,
    height: 40,
    position: "absolute",
    bottom: 0,
  },
  orderText: {
    color: "#606060",
    fontSize: 18,
    marginVertical: 25,
  },
  trackYourOrderButton: {
    ...uiStyles.button,
    width: 300,
    borderRadius: 8,
  },
  buttonsContainer: {
    gap: 20,
    marginVertical: 25,
  },
  backHomeButton: {
    ...uiStyles.button,
    width: 300,
    backgroundColor: "white",
    borderRadius: 8,
  },
  backHomeButtonText: {
    color: "#303030",
  },
});
