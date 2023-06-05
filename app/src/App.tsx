import { View, Text } from "react-native";
import { registerRootComponent } from "expo";
import Constants from "expo-constants";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack";

import AuthContextProvider, { useAuth } from "./utils/store/AuthContext";
import { AnimatedAppLoader } from "./components/AnimatedAppLoader";
import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import Register from "./screens/Register";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";

SplashScreen.preventAutoHideAsync().catch(() => {});

export type AuthStackParamList = {
  Main: undefined;
  Login: undefined;
  Register: undefined;
};

export type MainScreenProps = {
  navigation: NavigationProp<AuthStackParamList, "Main">;
};

export type LoginScreenProps = {
  navigation: NavigationProp<AuthStackParamList, "Login">;
};

export type RegisterScreenProps = {
  navigation: NavigationProp<AuthStackParamList, "Register">;
};

function MainScreen({ navigation }: MainScreenProps) {
  return <Welcome navigation={navigation} />;
}

function LoginScreen({ navigation }: LoginScreenProps) {
  return <Login navigation={navigation} />;
}

function RegisterScreen({ navigation }: RegisterScreenProps) {
  return <Register navigation={navigation} />;
}

function AuthStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>AuthenticatedStack</Text>
    </View>
  );
}

function Root() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <NavigationContainer>
        {isAuthenticated ? <AuthenticatedStack /> : <AuthStack />}
      </NavigationContainer>
    </>
  );
}

function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  return (
    <AnimatedAppLoader image={{ uri: Constants.manifest?.splash?.image ?? "" }}>
      <StatusBar style="auto" />
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Root />
        </AuthContextProvider>
      </ThemeProvider>
    </AnimatedAppLoader>
  );
}

registerRootComponent(App);
