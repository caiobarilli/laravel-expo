import React from "react";
import { RegisterScreenProps } from "../../App";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as S from "./styles";

const Register: React.FC<any> = ({ navigation }: RegisterScreenProps) => {
  return (
    <S.Container>
      <S.FormContainer>
        <Title>Register</Title>
        <Input placeholder="Name" />
        <Input placeholder="Lastname" />
        <Input placeholder="E-mail" keyboardType="email-address" />
        <Input placeholder="Password" secureTextEntry={true} />
        <Input placeholder="Confirm Password" secureTextEntry={true} />
        <Button title="Register" onPress={() => navigation.navigate("Main")} />
      </S.FormContainer>
    </S.Container>
  );
};

export default Register;
