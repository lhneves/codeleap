import styled from "@emotion/styled";
import { rem, colors } from "../../styles/variables";
import fonts from "../../styles/typography";

function setColor(theme) {
  switch (theme) {
    case "black":
      return colors.black;
    case "primary":
      return colors.primary;
    case "secondary":
      return colors.secondary;
    case "tertiary":
      return colors.tertiary;
    default:
      return colors.primary;
  }
}

export const Holder = styled.button`
  align-items: center;
  background-color: ${({ model, theme }) =>
    model === "filled" ? setColor(theme) : "transparent"};
  border-color: ${({ theme }) => setColor(theme)};
  border-style: ${({ model }) => (model === "outline" ? "solid" : "none")};
  border-width: ${rem(1)};
  color: ${({ model, theme }) =>
    theme === "basic"
      ? colors.black
      : model === "filled"
      ? colors.white
      : setColor(theme)};
  cursor: ${({disabled}) => disabled ? 'default' : 'pointer'};
  display: flex;
  gap: ${rem(16)};
  justify-content: center;
  padding: ${rem(7)} 0;
  width: ${rem(111)};
  ${fonts.s1Subtitle()}
  font-weight: 700;
`;