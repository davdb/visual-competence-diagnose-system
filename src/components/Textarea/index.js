import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  position: relative;
  margin-top: 30px;
  flex-grow: 3;

  & > textarea {
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

const Textarea = ({ label, onChange, ...props }) => {
  const [focused, setFocused] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [value, setValue] = React.useState("");

  const onFocus = () => {};
  const onBlur = () => {};

  const handleOnFocus = () => {
    setFocused(true);
    onFocus();
  };

  const handleOnBlur = () => {
    setFocused(false);
    onBlur();
  };

  const validateValue = (val) => {
    // if (type === "email") {
    //   // VERY simple email validation
    //   if (val.indexOf("@") === -1) {
    //     setError("email is invalid");
    //   } else {
    //     setError(null);
    //   }
    // }
  };

  const handleOnChange = (val) => {
    validateValue(val);
    setValue(val);
    onChange(val);
  };

  const renderLabel = () => {
    if (label) {
      if (error) {
        return <label>{error}</label>;
      }

      return <label>{label}</label>;
    }
    return null;
  };

  const isFocused = focused || String(value).length;

  return (
    <InputContainer focused={isFocused} error={error}>
      {renderLabel()}
      <textarea
        value={value}
        rows="10"
        cols="70"
        onChange={(e) => handleOnChange(e.target.value)}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        {...props}
      />
    </InputContainer>
  );
};

export default Textarea;
