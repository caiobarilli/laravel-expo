import React from "react";
import {
  TouchableOpacityProps,
  TextProps,
  TouchableOpacity,
} from "react-native";
import { TextContainer, LinkText } from "./styles";

interface TextComponentProps extends TextProps {
  hasLink?: boolean;
  onPress?: TouchableOpacityProps["onPress"];
}

const Text: React.FC<TextComponentProps> = ({
  hasLink,
  onPress,
  children,
  ...rest
}) => {
  if (hasLink) {
    return (
      <TouchableOpacity onPress={onPress}>
        <TextContainer {...rest}>
          <LinkText>{children}</LinkText>
        </TextContainer>
      </TouchableOpacity>
    );
  }

  return (
    <TextContainer {...rest}>
      <React.Fragment>{children}</React.Fragment>
    </TextContainer>
  );
};

export default Text;
