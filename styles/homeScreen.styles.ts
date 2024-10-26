import { boardingStyles } from "@/components/Boarding/styles/boarding.styles";
import { StyleSheet } from "react-native";

export const homeScreenStyles = StyleSheet.create({
  // main container
  container: {
    paddingHorizontal: 20,
    backgroundColor: "white",
    flex: 1,
  },

  // header styles
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

  // categroy styles
  categoryContainer: {
    gap: 25,
    flexShrink: 0,
    height: 80,
    marginVertical: 25,
  },
});
