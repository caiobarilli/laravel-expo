import React from "react";
import * as S from "./styles";

interface RegisterProps {
  navigation: any;
}

export default ({ navigation }: RegisterProps) => (
  <S.Container>
    <S.Title>Register</S.Title>

    <S.RegisterButton
      title="Cancel"
      onPress={() => navigation.navigate("Home")}
    />
  </S.Container>
);
