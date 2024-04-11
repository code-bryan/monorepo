import { NavigationContainer } from "@react-navigation/native";
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { PageOne, PageTwo, RootLayout, exampleAtom, store, useExampleAtom } from "@sa/common";
import { useAtom } from "jotai";
import { PropsWithChildren } from "react";
import { SafeAreaView, TextInput } from "react-native";

enum Routes {
  Home = 'home',
  Second = 'second',
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Root>
      <Stack.Navigator initialRouteName={Routes.Home} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.Home} component={MobilePageOne} />
        <Stack.Screen name={Routes.Second} component={MobilePageTwo} />
      </Stack.Navigator>
    </Root>
  );
}

function Root(props: PropsWithChildren) {
  return (
    <RootLayout>
      <NavigationContainer>
        {props.children}
      </NavigationContainer>
    </RootLayout>
  );
}

type ScreenNavigation = {
  navigation: NativeStackNavigationProp<any, 'Home'>
}

function MobilePageOne(props: ScreenNavigation) {
  const { navigation } = props;
  const [example, setExample] = useExampleAtom()

  return (
    <SafeAreaView>
      <TextInput value={example} onChangeText={(text) => setExample(text)} />
      <PageOne onPage={() => navigation.navigate(Routes.Second)} />
    </SafeAreaView>
  );
}

type TwoScreenNavigation = {
  navigation: NativeStackNavigationProp<any, 'Second'>
}

function MobilePageTwo(props: TwoScreenNavigation) {
  const { navigation } = props;
  return <PageTwo onPage={() => navigation.goBack()} />
}