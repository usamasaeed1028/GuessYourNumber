import { StyleSheet, View } from "react-native";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    padding: 16,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    elevation: 4, // box shadow
  },
});
