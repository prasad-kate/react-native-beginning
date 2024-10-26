import { boardingStyles } from "@/components/Boarding/styles/boarding.styles";
import { StyleSheet } from "react-native";

export const homeScreenStyles = StyleSheet.create({
  container: {
    padding: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTextContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerMakeHomeText: {
    ...boardingStyles.textMakePart,
    fontSize: 18,
  },
  headerBeautifulText: {
    ...boardingStyles.textBeautiful,
    fontSize: 18,
    letterSpacing: 4,
  },
});
