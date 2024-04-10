import {Text, Pressable} from "react-native";

export function HelloWorld() {
  const handlePress = () => {
    console.log('here');
  }

  return (
    <Pressable onPress={handlePress}>
      <Text>Hello World 1</Text>
    </Pressable>
  );
}