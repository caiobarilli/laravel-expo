import React from "react";
import { MainScreenProps } from "../../App";
import Title from "../../components/Title";
import Button from "../../components/Button";
import * as S from "./styles";

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
