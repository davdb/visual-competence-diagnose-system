import React from "react";

import { DRAG_DATA_KEY, SHAPE_TYPES } from "../VisualProductionPanel/constants";

const handleDragStart = (event) => {
  const type = event.target.dataset.shape;

  if (type) {
    // x,y coordinates of the mouse pointer relative to the position of the padding edge of the target node
    const offsetX = event.nativeEvent.offsetX;
    const offsetY = event.nativeEvent.offsetY;

    // dimensions of the node on the browser
    const clientWidth = event.target.clientWidth;
    const clientHeight = event.target.clientHeight;

    const image = type === "image" ? event.target.dataset.image : null;

    const dragPayload = JSON.stringify({
      type,
      offsetX,
      offsetY,
      clientWidth,
      clientHeight,
      image,
    });

    event.nativeEvent.dataTransfer.setData(DRAG_DATA_KEY, dragPayload);
  }
};

const Palette = ({ images }) => {
  return (
    <aside className="palette">
      <h2>Kształty</h2>
      <div
        className="shape rectangle"
        data-shape={SHAPE_TYPES.RECT}
        draggable
        onDragStart={handleDragStart}
      />
      <div
        className="shape circle"
        data-shape={SHAPE_TYPES.CIRCLE}
        draggable
        onDragStart={handleDragStart}
      />
      <div
        className="shape triangle"
        data-shape={SHAPE_TYPES.TRIANGLE}
        draggable
        onDragStart={handleDragStart}
      />
      <div
        className="shape line"
        data-shape={SHAPE_TYPES.LINE}
        draggable
        onDragStart={handleDragStart}
      />

      {/* {images.map((item) => (
        <div
          key={item.id}
          className="shape image"
          style={{ backgroundImage: "url(" + item.image + ")" }}
          data-image={item.image}
          data-shape={SHAPE_TYPES.IMAGE}
          draggable
          onDragStart={handleDragStart}
        />
      ))} */}
    </aside>
  );
};

export default Palette;
