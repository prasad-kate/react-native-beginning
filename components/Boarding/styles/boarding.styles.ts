import { StyleSheet } from "react-native";

export const boardingStyles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  textContainer: {
    padding: 30,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  textMakePart: {
    color: "#606060",
    fontSize: 24,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  textBeautiful: {
    color: "#303030",
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 5,
  },
  textDescription: {
    color: "#808080",
    fontSize: 18,
    marginTop: 20,
  },
  boardingButtonContainer: {
    flex: 1,
    // paddingBottom: 250,
    justifyContent: "center",
    alignItems: "center",
  },
});
