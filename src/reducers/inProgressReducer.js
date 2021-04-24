import { ADD_INPROGRESS, REMOVE_INPROGRESS} from "../constants";

const inProgressReducer =  (state = [], action) => {
  switch (action.type) {
    case ADD_INPROGRESS:
      return [...state,action.payload];

    case REMOVE_INPROGRESS:
      state.splice(action.payload, 1);
      return state;

    default:
      return state;
  }
};
export default inProgressReducer;