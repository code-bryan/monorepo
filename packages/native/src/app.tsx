import { NavigationContainer } from "@react-navigation/native";
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { PageOne, PageTwo } from "@sa/common";

enum Routes {
  Home = 'home',
  Second = 'second',
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.Home} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.Home} component={MobilePageOne} />
        <Stack.Screen name={Routes.Second} component={MobilePageTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

type ScreenNavigation = {
  navigation: NativeStackNavigationProp<any, 'Home'>
}

function MobilePageOne(props: ScreenNavigation) {
  const { navigation } = props;
  return <PageOne onPage={() => navigation.navigate(Routes.Second)} />
}

type TwoScreenNavigation = {
  navigation: NativeStackNavigationProp<any, 'Second'>
}

function MobilePageTwo(props: TwoScreenNavigation) {
  const { navigation } = props;
  return <PageTwo onPage={() => navigation.goBack()} />
}