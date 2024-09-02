import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "bold",
    fontSize: 40
  },
  appBarWrapper: {
    marginHorizontal: 22,
    marginTop: 12
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  location: {
    fontFamily: "semibold",
    fontSize: 20,
    color: "gray"
  },
  cartCount: {
    position: "absolute",
    bottom: 16,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "green",
    justifyContent: "center",
    zIndex: 999
  },
  cartNumber: {
    fontFamily: "regular",
    fontWeight: "600",
    fontSize: 10,
    color: "white"
  }
})

export default styles