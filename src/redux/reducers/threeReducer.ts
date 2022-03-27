import A from "redux/actions";

const three = (state = {}, action) => {
  switch (action.type) {
    case A.SET_SCENE:
      state = {
        ...state,
        scene: action.payload,
      };
      break;
    default:
      state = state;
  }

  return state;
};

const pointLight = (state = {}, action) => {
  switch (action.type) {
    case A.SET_POINT_LIGHT:
      state = action.payload;
      break;
    default:
      state = state;
  }

  return state;
};

const ambientLight = (state = {}, action) => {
  switch (action.type) {
    case A.SET_AMBIENT_LIGHT:
      state = action.payload;
      break;
    default:
      state = state;
  }

  return state;
};

const camera = (state = {}, action) => {
  switch (action.type) {
    case A.SET_CAMERA:
      state = action.payload;
      break;
    default:
      state = state;
  }

  return state;
};

const renderer = (state = {}, action) => {
  switch (action.type) {
    case A.SET_RENDERER:
      state = action.payload;
      break;
    default:
      state = state;
  }

  return state;
};

const frameId = (state = {}, action) => {
  switch (action.type) {
    case A.SET_FRAME_ID:
      state = action.payload;
      break;
    default:
      state = state;
  }

  return state;
};

export default {
  three,
  // scene,
  pointLight,
  ambientLight,
  camera,
  renderer,
  frameId,
};
