import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #000;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 32px;
`;

export default () => (
  <Container>
    <Title>Hello</Title>
  </Container>
);
