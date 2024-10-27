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
    marginVertical: 5,
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
  categoryContainerContentStyles: {
    gap: 25,
    flexShrink: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryContainerStyles: {
    maxHeight: 100,
    minHeight: 70,
    marginVertical: 10,
  },
  categoryName: {
    fontSize: 14,
    textAlign: "center",
    color: "gray",
  },

  // products styles
  productsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 15,
    paddingBottom: 10,
  },
  productCardContainer: {
    width: "48%",
  },
  productCardImage: {
    width: "100%",
    aspectRatio: "3/4",
    borderRadius: 10,
    overflow: "hidden",
  },
  productName: {
    color: "#606060",
    fontSize: 14,
    marginVertical: 5,
  },
  productPrice: {
    color: "#303030",
    fontSize: 14,
    fontWeight: "bold",
  },
  shoppingCartIcon: {
    width: 30,
    height: 30,
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 10,
  },
});
