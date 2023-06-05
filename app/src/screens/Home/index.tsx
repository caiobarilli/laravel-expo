import React from "react";
import { HomeScreenProps } from "../../App";
import Title from "../../components/Title";
import * as S from "./styles";

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <S.Container>
      <Title size="larger">Home</Title>
    </S.Container>
  );
};

export default Home;
