import styled from "styled-components/native";

interface TitleTextProps {
  size?: "small" | "larger";
}

export const TitleText = styled.Text<TitleTextProps>`
  font-size: ${({ size }) =>
    size === "small" ? "18px" : size === "larger" ? "32px" : "20px"};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.black};
  text-transform: uppercase;
  margin-bottom: 20px;
`;
