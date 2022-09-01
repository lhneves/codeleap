import { css } from "@emotion/react";
import styled from "@emotion/styled";
import ReactModal from "react-modal";
import { colors, mediaQuery } from "../../styles/variables";

export const StyledModal = styled(ReactModal)`
  display: block;
`;

export const Container = styled.div`
  background-color: ${colors.white};
  z-index: 15;
  max-height: ${({ maxHeight }) => maxHeight && "100vh"};

  ${({ open }) => {
    return css`
      position: absolute;
      transform-origin: 0 0;
      animation: ${open ? "modalZoomIn" : "modalZoomOut"} 0.4s ease-in-out;
      bottom: initial;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      ${mediaQuery("laptop")} {
        animation: ${open ? "modalZoomIn" : "modalZoomOut"} 0.4s ease-in-out;
        bottom: initial;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    `;
  }}

  @keyframes modalSlideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes modalSlideDown {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(100%);
    }
  }

  @keyframes modalZoomIn {
    from {
      transform: scale(0.8) translate(-50%, -50%);
    }
    to {
      transform: scale(1) translate(-50%, -50%);
    }
  }
  @keyframes modalZoomOut {
    from {
      transform: scale(1) translate(-50%, -50%);
    }
    to {
      transform: scale(0.8) translate(-50%, -50%);
    }
  }
`;
