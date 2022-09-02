import styled from "@emotion/styled";
import { rem, colors } from "../../styles/variables";
import fonts from "../../styles/typography";
import { Form } from 'formik';

export const Container = styled.div`
  width:  ${rem(500)};
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  padding: ${rem(28)} ${rem(16)} ${rem(23)};
`;

export const Title = styled.h1`
  ${fonts.h1Headline()};
  margin-bottom: ${rem(30)};
  font-weight: 700;
`;

export const Subtitle = styled.p`
  ${fonts.s1Subtitle()};
  margin-bottom: ${rem(5)};
  font-weight: 400;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 ${rem(16)} ${rem(32)} 0;
  gap: ${rem(16)};
`;

export const ButtonContainer = styled.div`
  margin-top: ${rem(20)};

  display: flex;
  justify-content: flex-end;
`;

export const SignInForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ErrorHolder = styled.div`
  margin-top: 0.5rem;
  margin-left: ${rem(11)};
  font-size: 0.9rem;
`;

export const Error = styled.span`
  color: #ff0000;
`;
