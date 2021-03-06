export const SHAPE_TYPES = {
  RECT: "Kwadrat",
  CIRCLE: "Koło",
  TRIANGLE: "Trójkąt",
  IMAGE: "image",
  LINE: "Linia",
};

export const DEFAULTS = {
  RECT: {
    STROKE: "#000000",
    FILL: "#ffffff",
    WIDTH: 50,
    HEIGHT: 50,
    ROTATION: 0,
  },
  CIRCLE: {
    STROKE: "#000000",
    FILL: "#ffffff",
    RADIUS: 50,
  },
  TRIANGLE: {
    WIDTH: 50,
    HEIGHT: 50,
    SLIDES: 3,
    RADIUS: 60,
    FILL: "white",
    STROKE: "black",
    STROKEWIDTH: 2,
  },
  LINE: {
    WIDTH: 100,
    HEIGHT: 50,
    TENSION: 1,
    STROKE: "black",
    STROKEWIDTH: 2,
  },
  IMAGE: {
    WIDTH: 200,
    HEIGHT: 200,
  },
};

export const LIMITS = {
  RECT: {
    MAX: 1000,
    MIN: 10,
  },
  CIRCLE: {
    MAX: 500,
    MIN: 5,
  },
  TRIANGLE: {
    MAX: 500,
    MIN: 5,
  },
  LINE: {
    MAX: 500,
    MIN: 5,
  },
  IMAGE: {
    MAX: 500,
    MIN: 5,
  },
};

export const DRAG_DATA_KEY = "__drag_data_payload__";
