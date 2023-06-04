import React from "react";
import Title from "../../components/Title";
import Text from "../../components/Text";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as S from "./styles";

interface RegisterProps {
  navigation: any;
}

const Register: React.FC<any> = ({ navigation }: RegisterProps) => {
  return (
    <S.Container>
      <S.FormContainer>
        <Title>Register</Title>
        <Input placeholder="Name" />
        <Input placeholder="Lastname" />
        <Input placeholder="E-mail" keyboardType="email-address" />
        <Input placeholder="Password" secureTextEntry={true} />
        <Input placeholder="Confirm Password" secureTextEntry={true} />
        <Button title="Register" onPress={() => navigation.navigate("Home")} />
      </S.FormContainer>
    </S.Container>
  );
};

export default Register;
