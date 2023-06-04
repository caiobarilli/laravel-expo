import React from "react";
import { TextProps } from "react-native";
import { TitleText } from "./styles";

interface TitleProps extends TextProps {
  size?: "small" | "larger";
}

const Title: React.FC<TitleProps> = ({ children, size, ...rest }) => {
  return (
    <TitleText size={size} {...rest}>
      {children}
    </TitleText>
  );
};

export default Title;
