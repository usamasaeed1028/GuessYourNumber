import { View, Text, StyleSheet } from 'react-native';


function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>#{roundNumber}</Text>
      <Text style={styles.text}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: "#72063C",
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#3b021f",
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
  },
  text:{ color: 'white'}

});