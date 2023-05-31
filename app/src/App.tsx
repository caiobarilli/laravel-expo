import { useCallback, useEffect, useMemo, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { registerRootComponent } from "expo";
import { Asset } from "expo-asset";
import Constants from "expo-constants";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { AnimatedAppLoader } from "./components/AnimatedAppLoader";

SplashScreen.preventAutoHideAsync().catch(() => {});

function MainScreen({ navigation }: any) {
  return <Welcome navigation={navigation} />;
}

function LoginScreen({ navigation }: any) {
  return <Login navigation={navigation} />;
}

function RegisterScreen({ navigation }: any) {
  return <Register navigation={navigation} />;
}

function App() {
  const Stack = createNativeStackNavigator();
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  return (
    <AnimatedAppLoader image={{ uri: Constants.manifest?.splash?.image ?? "" }}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
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
        </NavigationContainer>
      </ThemeProvider>
    </AnimatedAppLoader>
  );
}

registerRootComponent(App);
