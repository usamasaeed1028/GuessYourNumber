import { useState } from "react";
import { View, TextInput, StyleSheet, Alert, Text } from "react-native";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

const StartGameScreen = ({ onPickedNumber }) => {
  const [enteredValue, setEnteredValue] = useState(0);

  const numberInputHandler = (number) => {
    setEnteredValue(number);
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "default", onPress: resetInputHandler }]
      );
      return;
    }
    onPickedNumber(chosenNumber);
  };
  const resetInputHandler = () => {
    setEnteredValue("");
  };
  return (
    <View style={styles.rootContainer}>
      <Title>Guess my Number</Title>
      <Card>
        <Text style={styles.instructionText}>Enter a number</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredValue}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};
export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    marginHorizontal: 24,
  },
  instructionText: {
    color: "#cccccc",
    fontSize: 16,
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#ddb52f",
    fontSize: 32,
    fontWeight: "bold",
    color: "#ddb52f",
    marginVertical: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});
