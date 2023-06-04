import React from "react";
import Title from "../../components/Title";
import Button from "../../components/Button";
import * as S from "./styles";

interface WelcomeProps {
  navigation: any;
}

const Welcome: React.FC<any> = ({ navigation }: WelcomeProps) => {
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
