import styled from "@emotion/styled";
import { rem, colors } from "../../styles/variables";
import fonts from "../../styles/typography";

export const Container = styled.div`
  background-color: ${colors.white};
  border: ${rem(1)} solid ${colors.primary};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(24)} ${rem(30)} ;
`;

export const Nav = styled.nav`
  background: ${colors.black};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
`;


export const Title = styled.h1`
  ${fonts.h1Headline()};
  font-weight: 700;
  color: ${colors.white};
`;

export const InfoContainer = styled.div`
  margin-bottom: ${rem(17)};

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.p`
  color: ${colors.secondary};
  ${fonts.p1Paragraph()};
`;

export const PostText = styled.p`
  color: ${colors.black};
  ${fonts.p1Paragraph()};
`;

