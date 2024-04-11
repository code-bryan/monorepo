import { StyleSheet, View, Text, SafeAreaView, Pressable, TextInput } from "react-native";
import normalize from "react-native-normalize";
import { useExampleAtom } from "../../model/state";

type Props = {
  onPage?: () => void;
};

export function PageOne(props: Props) {
  const { onPage } = props;
  const [example, setExample] = useExampleAtom();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.root}>
        <Text style={styles.title}>Page 1</Text>
        <Text style={styles.subtitle}>{example}</Text>

        <TextInput value={example} onChangeText={(text) => setExample(text)} />

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
    minHeight: '100%',
  },
  root: {
    flex: 1,
    paddingHorizontal: normalize(20),
    backgroundColor: 'lightgrey',
    gap: normalize(20),
  },
  title: {
    color: "#000",
    fontSize: normalize(42),
    fontWeight: "800",
  },
  subtitle: {
    color: "#000",
    fontSize: normalize(22),
    fontWeight: "800",
  },
  button: {
    backgroundColor: "indigo",
    padding: normalize(10),
    borderRadius: normalize(8),
  },
  buttonTitle: {
    color: "white",
    fontWeight: '800',
  }
});