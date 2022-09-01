import styled from "@emotion/styled";
import { colors, rem, mediaQuery } from "../../styles/variables";
import fonts from "../../styles/typography";

export const InputContainer = styled.div`
  border: ${rem(1)} solid ${colors.secondary};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin-top: ${({ label }) => (label ? rem(13) : "0")};
  position: relative;
  width: 100%;
`;

export const InputHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const InputForm = styled.input`
  ${fonts.p2Paragraph()}

  background: none;
  border: none;
  border-radius: 0;
  display: block;
  height: ${({ height }) => rem(height)};
  width: 100%;
  resize: none;
  padding-left: 11px;

  :focus {
    border-color: ${colors.primary};
  }

  &[type="search"]::-webkit-search-cancel-button {
    display: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const LabelForm = styled.label`
  ${fonts.s2Subtext()}
  font-weight: 400; 
  color: ${colors.tertiary};
  max-width: 100%;
  overflow: hidden;
  padding: 6px 11px;
  position: absolute;
  text-overflow: ellipsis;
  top: ${({ active }) => rem(active ? -13 : 0)};
  transition: all linear 0.1s;
  white-space: nowrap;

  ${mediaQuery('laptop')} {
    top: ${({ active }) => rem(active ? -22 : 0)};
  }
`;
