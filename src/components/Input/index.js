import React from "react";
import styled from "styled-components";
import { IconEye, IconEyeOff } from "@tabler/icons";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  position: relative;
  margin-top: 30px;
  flex-grow: 3;

  & > input {
    border: 1px solid ${(props) => (props.error ? "#e77674" : "#eee")};
    border-radius: 0.25rem;
    background-color: transparent;
    outline: none;
    padding: 12px 3px 12px 15px;
    font-size: 16px;
    transition: all 0.2s ease;
    z-index: 500;
  }
  & > label {
    color: #757575;
    position: absolute;
    top: 15px;
    left: 15px;
    transition: all 0.2s ease;
    z-index: 500;

    ${(props) =>
      props.focused &&
      `
      font-size: 13px;
      transform: translateY(-23px) translateX(-5px);
      z-index: 501;
      background: white;
      padding: 0 8px;
    `}
  }
`;

const StyledPasswordShow = styled.a`
  color: #757575;
  position: absolute;
  top: 10px;
  right: 15px;
  width: 32px;
  cursor: pointer;
  z-index: 5001;
  &:hover {
    width: 32px;
    border-radius: 50%;
    background: #e6e6e6;
    transition: background 0.5s ease;
  }
  & svg {
    left: 50%;
    transform: translate(20%, 10%);
  }

  &[data-show="true"] {
    & svg.icon_eye_off {
      display: block;
    }
    & svg.icon_eye {
      display: none;
    }
  }

  &[data-show="false"] {
    & svg.icon_eye_off {
      display: none;
    }
    & svg.icon_eye {
      display: block;
    }
  }
`;

/**
 * A Plaid-inspired custom input component
 *
 * @param {string} value - the value of the controlled input
 * @param {string} type - the type of input we'll deal with
 * @param {string} label - the label used to designate info on how to fill out the input
 * @param {function} onChange - function called when the input value changes
 * @param {function} onFocus - function called when the input is focused
 * @param {function} onBlur - function called when the input loses focus
 * @param {function} setRef - function used to add this input as a ref for a parent component
 */
const Input = ({
  value,
  type,
  label,
  onChange,
  onFocus,
  onBlur,
  setRef,
  counter,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleOnFocus = () => {
    setFocused(true);
    onFocus();
  };

  const handleOnBlur = () => {
    setFocused(false);
    onBlur();
  };

  const validateValue = (val) => {
    if (type === "email") {
      if (val.indexOf("@") === -1) {
        setError("Wprowadzony email jest niepoprawny");
      } else {
        setError(null);
      }
    }
  };

  const handleOnChange = (val) => {
    validateValue(val);
    if (val === "") setError(null);
    onChange(val, counter);
  };

  const handlePasswordShowChange = (event) => {
    var button = event.target.parentNode.closest("a");
    var input = button.parentNode.childNodes[1];

    if (input.type === "password") {
      input.type = "text";
      button.dataset.show = "true";
    } else {
      input.type = "password";
      if (input.value !== "") {
        button.dataset.show = "false";
      }
    }
  };

  const renderLabel = () => {
    if (label) {
      return <label>{label}</label>;
    }
    return null;
  };

  const isFocused = focused || String(value).length || type === "date";

  return (
    <>
      <InputContainer focused={isFocused} error={error}>
        {renderLabel()}
        <input
          autoComplete="off"
          value={value}
          type={type}
          onChange={(e) => handleOnChange(e.target.value)}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          ref={(ref) => setRef(ref)}
          {...props}
        />
        {type === "password" && (
          <StyledPasswordShow
            data-show="false"
            onClick={handlePasswordShowChange}
          >
            <IconEye className="icon_eye" color="black" stroke={1} />
            <IconEyeOff className="icon_eye_off" color="black" stroke={1} />
          </StyledPasswordShow>
        )}
      </InputContainer>

      {error && value != "" && <label>{error}</label>}
    </>
  );
};

Input.defaultProps = {
  type: "text",
  label: "",
  onChange: (text) => {
    console.error(`Missing onChange prop: ${text}`);
  },
  onFocus: () => {},
  onBlur: () => {},
  setRef: () => {},
};

export default Input;
