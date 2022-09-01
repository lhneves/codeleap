import styled from "@emotion/styled";
import { rem, colors } from "../../styles/variables";
import fonts from "../../styles/typography";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(24)} ${rem(30)};
  background-color: ${colors.white};
  border: ${rem(1)} solid ${colors.primary};

  width: ${({ edit }) => edit && rem(723)};
`;

export const Title = styled.h1`
  ${fonts.h1Headline()};
  font-weight: 700;
  color: ${colors.black};
  margin-bottom: ${rem(34)};
`;

export const Subtitle = styled.p`
  ${fonts.s1Subtitle()};
  margin-bottom: ${rem(7)};
  font-weight: 400;
`;