import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  const gameOverHandler = (numbeOfRounds) => {
    setGameIsOver(true);
    setGuessRounds(numbeOfRounds)
  };

  const restartGameHandler = () => {
    setGameIsOver(false);
    setUserNumber(null);
    setGuessRounds(0);
  };

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onRestart={restartGameHandler}
      />
    );
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundColor}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: "#ddb52f",
    flex: 1,
  },
  backgroundColor: {
    opacity: 0.15,
  },
});
