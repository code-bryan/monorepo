import { StyleSheet, View, Text, SafeAreaView, Pressable, Dimensions } from "react-native";
import normalize from "react-native-normalize";

type Props = {
  onPage?: () => void;
};

export function PageTwo(props: Props) {
  const { onPage } = props;
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.root}>
        <Text style={styles.title}>
          Page 2
        </Text>

        <Pressable style={styles.button} onPress={onPage}>
          <Text style={styles.buttonTitle}>Go to page 1</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    minHeight: '100%',
  },
  root: {
    flex: 1,
    paddingHorizontal: normalize(20),
    backgroundColor: 'lightgreen',
  },
  title: {
    color: "#000",
    fontSize: normalize(42),
    fontWeight: "800",
  },
  button: {
    backgroundColor: "green",
    padding: normalize(10),
    borderRadius: normalize(8),
  },
  buttonTitle: {
    color: "black",
    fontWeight: '800',
  }
});