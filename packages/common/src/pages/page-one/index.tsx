import { StyleSheet, View, Text, SafeAreaView, Pressable } from "react-native";
// import normalize from "react-native-normalize";

type Props = {
  onPage?: () => void;
};

export function PageOne(props: Props) {
  const { onPage } = props;
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.root}>
        <Text style={styles.title}>
          Page 1
        </Text>

        <Pressable style={styles.button} onPress={onPage}>
          <Text style={styles.buttonTitle}>Go to page 2</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  root: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'lightindigo',
  },
  title: {
    color: "#000",
    fontSize: 42,
    fontWeight: "800",
  },
  button: {
    backgroundColor: "indigo",
    padding: 10,
    borderRadius: 8,
  },
  buttonTitle: {
    color: "white",
    fontWeight: '800',
  }
});

// const styles = StyleSheet.create({
//   safe: {
//     flex: 1,
//   },
//   root: {
//     flex: 1,
//     paddingHorizontal: normalize(20),
//     backgroundColor: 'lightindigo',
//   },
//   title: {
//     color: "#000",
//     fontSize: normalize(42),
//     fontWeight: "800",
//   },
//   button: {
//     backgroundColor: "indigo",
//     padding: normalize(10),
//     borderRadius: normalize(8),
//   },
//   buttonTitle: {
//     color: "white",
//     fontWeight: '800',
//   }
// });