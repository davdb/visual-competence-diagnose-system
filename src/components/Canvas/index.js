import React, { useRef, useCallback, useState, useEffect } from "react";
import { Layer, Stage } from "react-konva";

import {
  useShapes,
  clearSelection,
  createCircle,
  createRectangle,
  createTriangle,
  createImage,
  createLine,
  deleteShape,
  saveDiagram,
  reset,
} from "../VisualProductionPanel/state";
import { IconWiperWash, IconTrash } from "@tabler/icons";

import { DRAG_DATA_KEY, SHAPE_TYPES } from "../VisualProductionPanel/constants";
import Shape from "../Shape";

const handleDragOver = (event) => event.preventDefault();

const Canvas = ({ handleProductionContent }) => {
  const shapes = useShapes((state) => Object.entries(state.shapes));
  const stageRef = useRef();
  const isSelectedSelector = useCallback((state) => state.selected, []);
  const isSelected = useShapes(isSelectedSelector);

  const handleDrop = useCallback((event) => {
    const draggedData = event.nativeEvent.dataTransfer.getData(DRAG_DATA_KEY);

    if (draggedData) {
      const {
        offsetX,
        offsetY,
        type,
        clientHeight,
        clientWidth,
        image,
      } = JSON.parse(draggedData);

      stageRef.current.setPointersPositions(event);

      const coords = stageRef.current.getPointerPosition();

      if (type === SHAPE_TYPES.RECT) {
        createRectangle({
          x: coords.x - offsetX,
          y: coords.y - offsetY,
        });
      } else if (type === SHAPE_TYPES.CIRCLE) {
        createCircle({
          x: coords.x - (offsetX - clientWidth / 2),
          y: coords.y - (offsetY - clientHeight / 2),
        });
      } else if (type === SHAPE_TYPES.TRIANGLE) {
        createTriangle({
          x: coords.x - offsetX,
          y: coords.y - offsetY,
        });
      } else if (type === SHAPE_TYPES.IMAGE) {
        createImage({
          x: coords.x - offsetX,
          y: coords.y - offsetY,
          image: image,
        });
      } else if (type === SHAPE_TYPES.LINE) {
        createLine({
          x: coords.x - offsetX,
          y: coords.y - offsetY,
        });
      }
    }
  }, []);

  const handleShapes = () => {
    var image = stageRef.current.toDataURL({ pixelRatio: 3 });
    handleProductionContent(image, shapes);
  };

  return (
    <main className="canvas" onDrop={handleDrop} onDragOver={handleDragOver}>
      <div className="buttons">
        <button id="button-handle-shapes-reset" onClick={reset}>
          <IconWiperWash color="black" stroke={2} />
        </button>
        {isSelected && (
          <button onClick={deleteShape}>
            <IconTrash color="black" stroke={2} />
          </button>
        )}
        <button
          id="button-handle-shapes"
          style={{ display: "none" }}
          onClick={handleShapes}
        >
          Output
        </button>
      </div>
      <h2 className="canvastitle">Tablica</h2>
      <Stage
        ref={stageRef}
        width={window.innerWidth - 400}
        height={window.innerHeight}
        onClick={clearSelection}
      >
        <Layer>
          {shapes.map(([key, shape]) => (
            <Shape
              key={key}
              counter={shapes.length}
              shape={{ ...shape, id: key }}
            />
          ))}
        </Layer>
      </Stage>
    </main>
  );
};

export default Canvas;
