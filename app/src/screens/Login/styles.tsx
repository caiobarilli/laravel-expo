import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  background-color: #fff;
  margin-top: 20px;
  padding: 0 20px;
  font-size: 16px;
`;

export const RegisterButton = styled.Button`
  margin: 60px;
  flex: 1;
`;

export const ButtonText = styled.Text`
  color: #000;
  text-align: center;
  font-size: 16px;
  text-transform: uppercase;
  flex: 1;
  padding-top: 15px;
`;
