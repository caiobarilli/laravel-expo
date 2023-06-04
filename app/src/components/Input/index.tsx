import React from "react";
import { TextInputProps } from "react-native";
import { InputContainer, InputLabel, InputField } from "./styles";

interface InputProps extends TextInputProps {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <InputContainer>
      {label && <InputLabel>{label}</InputLabel>}
      <InputField {...rest} />
    </InputContainer>
  );
};

export default Input;
