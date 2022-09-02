import styled from "@emotion/styled";
import { rem, colors, mediaQuery } from "../../styles/variables";
import fonts from "../../styles/typography";

export const Container = styled.div`
  ${mediaQuery('laptop')} {
    width: ${rem(661)};
  }

  width: 80vw;
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  padding: ${rem(34)} ${rem(34)} ${rem(25)};
`;

export const Title = styled.h1`
  ${fonts.h1Headline()};
  margin-bottom: ${rem(50)};
  font-weight: 400;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: ${rem(16)}
`;