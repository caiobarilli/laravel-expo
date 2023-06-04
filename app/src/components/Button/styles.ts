import styled from "styled-components/native";

interface ButtonTextProps {
  larger?: boolean;
}

export const ButtonContainer = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 10px 20px;
  border-radius: 5px;
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  color: #ffffff;
  font-size: ${({ larger }) => (larger ? "32px" : "16px")};
  font-weight: bold;
  text-transform: uppercase;
`;
