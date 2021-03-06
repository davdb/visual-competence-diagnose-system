import React, { useCallback, useEffect } from "react";

import { SHAPE_TYPES } from "../VisualProductionPanel/constants";
import { useShapes } from "../VisualProductionPanel/state";

import Circle from "./Circle";
import Rectangle from "./Rectangle";
import Triangle from "./Triangle";
import Image from "./Image";
import Line from "./Line";

const Shape = ({ shape, counter }) => {
  const isSelectedSelector = useCallback(
    (state) => state.selected === shape.id,
    [shape]
  );

  const isSelected = useShapes(isSelectedSelector);

  if (shape.type === SHAPE_TYPES.RECT) {
    return <Rectangle {...shape} isSelected={isSelected} counter={counter} />;
  } else if (shape.type === SHAPE_TYPES.CIRCLE) {
    return <Circle {...shape} isSelected={isSelected} />;
  } else if (shape.type === SHAPE_TYPES.TRIANGLE) {
    return <Triangle {...shape} isSelected={isSelected} />;
  } else if (shape.type === SHAPE_TYPES.IMAGE) {
    return <Image {...shape} isSelected={isSelected} />;
  } else if (shape.type === SHAPE_TYPES.LINE) {
    return <Line {...shape} isSelected={isSelected} />;
  }

  return null;
};

export default Shape;
