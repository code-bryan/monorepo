import {Text, Pressable, StyleSheet} from "react-native";
import normalize from "react-native-normalize";

export function HelloWorld() {
  const handlePress = () => {
    console.log('here');
  }

  return (
    <Pressable style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Basic Button</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(16),
    backgroundColor: 'lightblue',
  },
  buttonText: {
    color: "#000",
    fontWeight: '600',
  }
});