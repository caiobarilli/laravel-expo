import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 32px;
  text-transform: uppercase;
`;

export const FormContainer = styled.View`
  background-color: #e7e7e7;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  background-color: #fff;
  margin-top: 20px;
  padding: 0 20px;
  font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #5c0c55;
  margin-top: 20px;
  padding: 0 20px;
  font-size: 16px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 16px;
  text-transform: uppercase;
  padding-top: 15px;
`;

export const RegisterWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 0;
  width: 80%;
  margin-top: 20px;
`;

export const RegisterText = styled.Text`
  text-align: center;
  color: #000;
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const RegisterTextBold = styled.Text`
  text-align: center;
  color: #5c0c55;
  font-size: 12px;
`;

export const RegisterButton = styled.TouchableOpacity``;
