import React, { useRef, useEffect, useCallback } from "react";
import {
  RegularPolygon as KonvaRegularPolygon,
  Transformer,
} from "react-konva";

import { LIMITS } from "../VisualProductionPanel/constants";
import {
  selectShape,
  transformTriangleShape,
  moveShape,
} from "../VisualProductionPanel/state";

const boundBoxCallbackForTriangle = (oldBox, newBox) => {
  // limit resize
  if (
    newBox.width < LIMITS.CIRCLE.MIN ||
    newBox.height < LIMITS.CIRCLE.MIN ||
    newBox.width > LIMITS.CIRCLE.MAX ||
    newBox.height > LIMITS.CIRCLE.MAX
  ) {
    return oldBox;
  }
  return newBox;
};

const Triangle = ({ id, isSelected, type, ...shapeProps }) => {
  const shapeRef = useRef();
  const transformerRef = useRef();

  useEffect(() => {
    if (isSelected) {
      transformerRef.current.nodes([shapeRef.current]);
      transformerRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const handleSelect = useCallback(
    (event) => {
      event.cancelBubble = true;

      selectShape(id);
    },
    [id]
  );

  const handleDrag = useCallback(
    (event) => {
      moveShape(id, event);
    },
    [id]
  );

  const handleTransform = useCallback(
    (event) => {
      transformTriangleShape(shapeRef.current, id, event);
    },
    [id]
  );

  return (
    <>
      <KonvaRegularPolygon
        onClick={handleSelect}
        onTap={handleSelect}
        onDragStart={handleSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={handleDrag}
        onTransformEnd={handleTransform}
      />
      {isSelected && (
        <Transformer
          anchorSize={5}
          borderDash={[6, 2]}
          ref={transformerRef}
          boundBoxFunc={boundBoxCallbackForTriangle}
          enabledAnchors={[
            "top-left",
            "top-right",
            "bottom-right",
            "bottom-left",
          ]}
        />
      )}
    </>
  );
};

export default Triangle;
