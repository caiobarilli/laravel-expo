import * as S from "./styles";
import { ActivityIndicator } from "react-native";

interface LoadingOverlayProps {
  message: string;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ message }) => {
  return (
    <S.Wrapper>
      <S.Text>{message}</S.Text>
      <ActivityIndicator size="large" />
    </S.Wrapper>
  );
};

export default LoadingOverlay;
