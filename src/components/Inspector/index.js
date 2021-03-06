import React, { useCallback } from "react";
import ColorPicker from "../ColorPicker";
import { useShapes, updateAttribute } from "../VisualProductionPanel/state";

const shapeSelector = (state) => state.shapes[state.selected];

const Inspector = () => {
  const selectedShape = useShapes(shapeSelector);

  const updateAttr = useCallback((event) => {
    const attr = event.target.name;

    updateAttribute(attr, event.target.value);
  }, []);

  const updateColorsAttr = useCallback((attr, value) => {
    updateAttribute(attr, value);
  }, []);

  return (
    <aside className="panel">
      <h2>Właściwości</h2>
      <div className="properties">
        {selectedShape ? (
          <>
            <div className="key">
              Typ <span className="value">{selectedShape.type}</span>
            </div>

            <div className="key">
              Obramowanie
              {/* <input
                className="value"
                name="stroke"
                type="color"
                value={selectedShape.stroke}
                onChange={updateAttr}
              /> */}
              <ColorPicker
                updateAttr={updateColorsAttr}
                name="stroke"
                defaultColor={selectedShape.stroke}
              />
            </div>

            <div className="key">
              Wypełnienie{" "}
              {/* <input
                className="value"
                name="fill"
                type="color"
                value={selectedShape.fill}
                onChange={updateAttr}
              /> */}
              <ColorPicker
                updateAttr={updateColorsAttr}
                name="fill"
                defaultColor={selectedShape.fill}
              />
            </div>

            {/* {selectedShape.type === "Fig. foremna" && (
              <div className="key">
                Ściany
                <input
                  className="value"
                  name="sides"
                  type="number"
                  min="3"
                  value={selectedShape.sides}
                  onChange={updateAttr}
                />
              </div>
            )} */}
          </>
        ) : (
          <div className="no-data">Wskaz element</div>
        )}
      </div>
    </aside>
  );
};

export default Inspector;
