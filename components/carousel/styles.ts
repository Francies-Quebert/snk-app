import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginBottom: 20,
  },
  bulletsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    gap: 8,
    paddingBottom: 10,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
  },
  activeBullet: {
    backgroundColor: "#000",
  },
  controlButton: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -16 }],
    borderRadius: 20,
    padding: 5,
  },
  controlLeft: {
    left: 10,
  },
  controlRight: {
    right: 10,
  },
  controlIcon: {
    color: "#000",
  },
});
