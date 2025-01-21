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
    overflow: "visible",
  },
  cartItemNumber: {
    position: "absolute",
    top: 0,
    right: 8,
    fontSize: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    color: "red",
    fontWeight: "bold",
    zIndex: 999,
  },

  // categroy styles
  categoryContainerContentStyles: {
    gap: 10,
    flexShrink: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryContainerStyles: {
    minHeight: 80,
    maxHeight: 80,
    marginVertical: 10,
  },
  categoryName: {
    fontSize: 14,
    textAlign: "center",
  },
  singleCategoryContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
  },
  singleCategoryImageContainer: {
    padding: 4,
    borderWidth: 1,
    borderRadius: 16,
  },
  singleCategoryImage: {
    width: 44,
    height: 44,
  },

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
  addToFavoritesContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 10,
    backgroundColor: "#00000040",
    width: 26,
    height: 30,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
