import styled from "@emotion/styled";
import { colors } from "../../styles/variables";


export const Nav = styled.nav`
  background: ${colors.black};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

export const Title = styled.h1`
  color: ${colors.white};
  font-weight: 700;
`;
