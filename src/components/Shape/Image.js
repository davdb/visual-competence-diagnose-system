import React, { useRef, useEffect, useCallback } from "react";
import { Image as KonvaImage, Transformer } from "react-konva";
import { LIMITS } from "../VisualProductionPanel/constants";
import {
  selectShape,
  transformImageShape,
  moveShape,
} from "../VisualProductionPanel/state";

import useImage from "use-image";

const boundBoxCallbackForImage = (oldBox, newBox) => {
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

const Image = ({ id, isSelected, type, image, ...shapeProps }) => {
  const shapeRef = useRef();
  const transformerRef = useRef();

  const [img] = useImage(image);

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
      transformImageShape(shapeRef.current, id, event);
    },
    [id]
  );

  return (
    <>
      <KonvaImage
        onClick={handleSelect}
        onTap={handleSelect}
        onDragStart={handleSelect}
        ref={shapeRef}
        image={img}
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
          boundBoxFunc={boundBoxCallbackForImage}
        />
      )}
    </>
  );
};

export default Image;
