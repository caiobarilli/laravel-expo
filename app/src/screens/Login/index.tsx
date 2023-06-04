import React from "react";
import Title from "../../components/Title";
import Text from "../../components/Text";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as S from "./styles";

interface LoginProps {
  navigation: any;
}

const Login: React.FC<any> = ({ navigation }: LoginProps) => {
  return (
    <S.Container>
      <S.FormContainer>
        <Title>Login</Title>
        <Input placeholder="E-mail" keyboardType="email-address" />
        <Input placeholder="Password" secureTextEntry={true} />
        <Button
          title="Login"
          onPress={() => navigation.navigate("ForgotPassword")}
        />
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
