import React from "react";
import * as S from "./styles";

export default () => (
  <S.Container>
    <S.FormContainer>
      <S.Title>Login</S.Title>
      <S.Input placeholder="E-mail" keyboardType="email-address" />
      <S.Input placeholder="Password" secureTextEntry={true} />
      <S.Button>
        <S.ButtonText>Login</S.ButtonText>
      </S.Button>
    </S.FormContainer>
  </S.Container>
);
