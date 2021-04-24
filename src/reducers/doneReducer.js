import { ADD_DONE, REMOVE_DONE } from "../constants";

const doneReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_DONE:
      return [...state,action.payload];

    case REMOVE_DONE:
      state.splice(action.payload, 1);
      return state;

    default:
      return state;
  }
};
export default doneReducer;