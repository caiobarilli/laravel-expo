import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
`;

export const WelcomeWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;
