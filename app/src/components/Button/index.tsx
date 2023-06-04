import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonText } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  larger?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, larger, ...rest }) => {
  return (
    <ButtonContainer {...rest}>
      <ButtonText larger={larger}>{title}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
