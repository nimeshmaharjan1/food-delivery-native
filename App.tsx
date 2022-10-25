import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CustomDrawer from "./components/navigation/custom-drawer/index";

const Stack = createStackNavigator();

function App() {
  const { colorScheme } = useColorScheme();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={CustomDrawer}></Stack.Screen>
      </Stack.Navigator>
      <StatusBar style={`${colorScheme === "dark" ? "dark" : "light"}`}></StatusBar>
    </NavigationContainer>
  );
}
export default App;
