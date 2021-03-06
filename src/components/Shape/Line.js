import React, { useRef, useEffect, useCallback } from "react";
import { Line as KonvaLine, Transformer } from "react-konva";

import { LIMITS } from "../VisualProductionPanel/constants";
import {
  selectShape,
  transformLineShape,
  moveShape,
} from "../VisualProductionPanel/state";

const boundBoxCallbackForLine = (oldBox, newBox) => {
  if (newBox.width < LIMITS.LINE.MIN || newBox.width > LIMITS.LINE.MAX) {
    return oldBox;
  }
  return newBox;
};

const Line = ({ id, isSelected, type, ...shapeProps }) => {
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
      transformLineShape(shapeRef.current, id, event);
    },
    [id]
  );

  return (
    <>
      <KonvaLine
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
          enabledAnchors={["middle-left", "middle-right"]}
          boundBoxFunc={boundBoxCallbackForLine}
        />
      )}
    </>
  );
};

export default Line;
