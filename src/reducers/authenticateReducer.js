import { AUTHENTICATE } from "../constants";

const authenticateReducer = (state = [], action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return action.payload;

    default:
      return state;
  }
};
export default authenticateReducer;