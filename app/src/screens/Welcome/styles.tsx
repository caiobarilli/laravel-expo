import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 30px;
  margin-bottom: 35px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const WelcomeWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const WelcomeParagraph = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  margin-top: 10px;
  margin-bottom: 10px;
  text-transform: uppercase;
`;
