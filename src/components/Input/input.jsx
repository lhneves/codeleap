import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  InputForm,
  InputHolder,
  InputContainer,
  LabelForm,
} from "./input.style";

const Input = React.forwardRef(
  ({ id, label, name, onChange, onFocus, placeholder, type, value }, ref) => {
    const [textareaHeight, setTextareaHeight] = useState(23);
    const [activeLabel, setActiveLabel] = useState(!!value);
    const [inputValue, setInputValue] = useState(value);

    const handleChange = (e) => {
      if (e.target.value) {
        setTextareaHeight(Math.round(e.target.scrollHeight));
      } else {
        setTextareaHeight(Math.round(23));
      }
      setInputValue(e.target.value);
      onChange(e);
    };

    return (
      <InputContainer label={label}>
        <InputHolder>
          <InputForm
            id={id}
            name={name}
            height={type === "textarea" ? textareaHeight : 23}
            as={type === "textarea" ? "textarea" : "input"}
            onChange={handleChange}
            onBlur={({ target }) => {
              const isEmpty = target.value === "";
              if (isEmpty) setActiveLabel(false);
            }}
            onFocus={(e) => {
              onFocus && onFocus(e);
              setActiveLabel(true);
            }}
            onMouseOver={() => {
              setActiveLabel(true);
            }}
            onMouseOut={({ target }) => {
              const isFocused = document.activeElement === target;
              const isEmpty = target.value === "";

              if (!isFocused && isEmpty) setActiveLabel(false);
            }}
            placeholder={placeholder}
            ref={ref}
            type={type}
            value={inputValue}
          />
        </InputHolder>
        <LabelForm
          onMouseOver={() => {
            setActiveLabel(true);
          }}
          active={activeLabel}
          htmlFor={id}
        >
          {label}
        </LabelForm>
      </InputContainer>
    );
  }
);

Input.displayName = "Input";

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf([
    "email",
    "number",
    "password",
    "search",
    "tel",
    "text",
    "url",
  ]),
  value: PropTypes.string,
};

Input.defaultProps = {
  label: "Label",
  onChange: () => {},
  onFocus: undefined,
  placeholder: "",
  type: "text",
  value: "",
};

export default Input;
