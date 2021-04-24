import { ADD_TODO, REMOVE_TODO } from "../constants";

const toDoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case REMOVE_TODO:
      state.splice(action.payload, 1);
      return state;

    default:
      return state;
  }
};
export default toDoReducer;