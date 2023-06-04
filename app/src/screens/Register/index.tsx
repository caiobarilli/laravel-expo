import React from "react";
import Title from "../../components/Title";
import Button from "../../components/Button";
import * as S from "./styles";

interface RegisterProps {
  navigation: any;
}

const Register: React.FC<any> = ({ navigation }: RegisterProps) => {
  return (
    <S.Container>
      <Title>Register</Title>
      <Button title="Cancel" onPress={() => navigation.navigate("Home")} />
    </S.Container>
  );
};

export default Register;
