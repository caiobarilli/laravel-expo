import React from "react";
import * as S from "./styles";

interface LoginProps {
  navigation: any;
}

export default ({ navigation }: LoginProps) => (
  <S.Container>
    <S.FormContainer>
      <S.Title>Login</S.Title>
      <S.Input placeholder="E-mail" keyboardType="email-address" />
      <S.Input placeholder="Password" secureTextEntry={true} />
      <S.Button>
        <S.ButtonText>Login</S.ButtonText>
      </S.Button>
    </S.FormContainer>
    <S.RegisterWrapper>
      <S.RegisterText>Don't have an account? </S.RegisterText>
      <S.RegisterButton onPress={() => navigation.navigate("Register")}>
        <S.RegisterBold>Register a new account.</S.RegisterBold>
      </S.RegisterButton>
    </S.RegisterWrapper>
  </S.Container>
);
