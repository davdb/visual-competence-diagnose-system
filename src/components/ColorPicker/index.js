import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TwitterPicker } from "react-color";

const StyledButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid black;
  background: ${(props) => props.defaultColor};
`;

const StyledPickerWrapper = styled.div`
  position: absolute;
`;

const StyledTwitterPicker = styled(TwitterPicker)`
  width: 140px !important;
`;

const ColorPicker = ({ name, defaultColor, updateAttr }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState("#fff");

  useEffect(() => {
    setColor(defaultColor);
  }, []);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleOnChange = (color, event) => {
    setColor(color.hex);
    setDisplayColorPicker(false);
    updateAttr(name, color.hex);
  };
  return (
    <div>
      <StyledButton onClick={handleClick} defaultColor={color}></StyledButton>
      {displayColorPicker ? (
        <StyledPickerWrapper>
          <StyledTwitterPicker
            onChange={handleOnChange}
            colors={[
              "#000000",
              "#545454",
              "#800080",
              "#0000FF",
              "#00FF00",
              "#FF8C00",
              "#FFFF00",
              "#8B4513",
              "#DA251D",
              "#FF69B4",
              "#ffffff",
            ]}
          />
        </StyledPickerWrapper>
      ) : null}
    </div>
  );
};

export default ColorPicker;
