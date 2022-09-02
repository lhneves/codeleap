import React from "react";
import PropTypes from "prop-types";

import { Holder } from "./button.style";

const Button = ({ model, onClick, text, theme, type, disabled }) => {
  return (
    <Holder
      type={type}
      model={model}
      onClick={onClick}
      theme={theme}
      disabled={disabled}
    >
      {text}
    </Holder>
  );
};

Button.propTypes = {
  model: PropTypes.oneOf(["filled", "outline"]),
  onClick: PropTypes.func,
  text: PropTypes.string,
  theme: PropTypes.oneOf(["primary", "secondary", "tertiary", "black"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

Button.defaultProps = {
  model: "filled",
  onClick: () => {},
  text: "Button",
  theme: "primary",
  type: "button",
};

export default Button;
