import { SafeAreaView, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PageOne, PageTwo } from "@sa/common";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PageOne" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="PageOne" component={MobilePageOne} />
        <Stack.Screen name="PageTwo" component={MobilePageTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MobilePageOne() {
  const navigation = useNavigation();
  return <PageOne onPage={() => navigation?.navigate('PageTwo')} />
}

function MobilePageTwo() {
  const navigation = useNavigation();
  return <PageTwo onPage={() => navigation?.navigate('PageOne')} />
}