import { StyleSheet } from "react-native";

export const globalSearchStyles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 70,
    paddingHorizontal: 20,
    zIndex: 1000,
    paddingBottom: 30,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "gray",
  },
  input: {
    flex: 1,
    marginLeft: 8,
    paddingHorizontal: 5,
    paddingVertical: 8,
    color: "black",
  },
});
