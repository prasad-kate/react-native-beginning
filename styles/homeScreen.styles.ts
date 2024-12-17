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
    marginVertical: 10,
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
    letterSpacing: 3,
  },
  cartIconContainer: {
    position: "relative",
  },
  cartItemNumber: {
    position: "absolute",
    top: -8,
    right: -8,
    height: 18,
    width: 18,
    fontSize: 11,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    backgroundColor: "#f5f5f5",
    color: "red",
    fontWeight: "bold",
  },

  // categroy styles
  categoryContainerContentStyles: {
    gap: 15,
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
  singleCategoryContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
  },
  singleCategoryImage: { width: 44, height: 44 },

  // products styles
  productsContainer: {
    gap: 20,
  },
  productCardContainer: {
    marginBottom: 20,
  },
  productCardImage: {
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
  shoppingCartIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 10,
  },
  shoppingCartIcon: {
    width: 32,
    height: 32,
  },
});
