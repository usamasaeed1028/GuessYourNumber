import { Pressable, StyleSheet, Text, View } from "react-native";

const PrimaryButton = ({ children, onPress }) => {
  const pressHandler = () => {};
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    backgroundColor: "#72063C",
    margin: 4,
    borderRadius: 28,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
