import * as S from "./styles";
import { MainScreenProps } from "../../App";
import React from "react";
import Title from "../../components/Title";
import Button from "../../components/Button";

const Welcome: React.FC<MainScreenProps> = ({ navigation }) => {
  return (
    <S.Container>
      <Title size="larger">Welcome</Title>
      <S.WelcomeWrapper>
        <Button
          title="Login"
          onPress={() => navigation.navigate("Login")}
          larger={true}
        />
      </S.WelcomeWrapper>
    </S.Container>
  );
};

export default Welcome;
