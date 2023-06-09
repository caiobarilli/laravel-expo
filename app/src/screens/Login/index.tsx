import React, { useEffect, useState, useCallback } from "react";
import { LoginScreenProps } from "../../App";
import Title from "../../components/Title";
import Text from "../../components/Text";
import Input from "../../components/Input";
import Button from "../../components/Button";
import LoadingOverlay from "../../components/LoadingOverlay";
import * as SplashScreen from "expo-splash-screen";
import { login } from "../../utils/auth";
import * as S from "./styles";

const Login: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return <LoadingOverlay message="Loading ..." />;
  }

  const loginHandler = async () => {
    setAppIsReady(false);
    try {
      await login("admin@admin.com", "secret");
    } catch (e) {
      console.warn(e);
    } finally {
      // Tell the application to render
      setAppIsReady(true);
    }
  };

  return (
    <S.Container onLayout={onLayoutRootView}>
      <S.FormContainer>
        <Title>Login</Title>
        <Input placeholder="E-mail" keyboardType="email-address" />
        <Input placeholder="Password" secureTextEntry={true} />
        <Button title="Login" onPress={loginHandler} />
      </S.FormContainer>
      <S.RegisterWrapper>
        <Text>Don't have an account? </Text>
        <Text hasLink onPress={() => navigation.navigate("Register")}>
          Register a new account.
        </Text>
      </S.RegisterWrapper>
    </S.Container>
  );
};

export default Login;
