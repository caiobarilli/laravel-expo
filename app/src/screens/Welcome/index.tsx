import React from "react";
import { Button } from "react-native";
import * as S from "./styles";

export default ({ navigation }: any) => (
  <S.Container>
    <S.Title>Welcome !</S.Title>
    <S.WelcomeWrapper>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <S.WelcomeParagraph>or</S.WelcomeParagraph>
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
    </S.WelcomeWrapper>
  </S.Container>
);
