import { Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

const GameOverScreen = ({ userNumber, roundsNumber, onRestart }) => {

  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
        guess the number <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
    </View>
  );
};
export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    margin: 36,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 36,
  },
  highlight: {
    fontWeight: "bold",
  },
});
