import { StyleSheet, Text } from "react-native";
const Title = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};
export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#3b021f",
        borderWidth: 2,
        borderColor: "#3b021f",
        textAlign: "center",
        padding: 12
    
      }
})
