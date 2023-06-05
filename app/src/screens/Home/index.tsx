import React from "react";
import Title from "../../components/Title";
import * as S from "./styles";

interface HomeProps {
  navigation: any;
}

const Home: React.FC<any> = ({ navigation }: HomeProps) => {
  return (
    <S.Container>
      <Title size="larger">Home</Title>
    </S.Container>
  );
};

export default Home;
