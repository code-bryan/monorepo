import { StyleSheet, View, Text, SafeAreaView, Pressable, Dimensions } from "react-native";
import normalize from "react-native-normalize";
import { translate } from "../../locales";

type Props = {
  onPage?: () => void;
};

export function PageTwo(props: Props) {
  const { onPage } = props;
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.root}>
        <Text style={styles.title}>
          {translate('base.page-two')}
        </Text>

        <Pressable style={styles.button} onPress={onPage}>
          <Text style={styles.buttonTitle}>
            {translate('base.goto', { page: translate('base.page-one') })}
          </Text>
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
    gap: normalize(20),
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