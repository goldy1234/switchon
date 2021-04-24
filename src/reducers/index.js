import { combineReducers } from "redux";
import authenticateReducer from './authenticateReducer';
import toDoReducer from './toDoReducer';
import inProgressReducer from './inProgressReducer';
import doneReducer from './doneReducer';

const rootReducer = combineReducers({
    authenticate: authenticateReducer,
    toDo: toDoReducer,
    inProgress: inProgressReducer,
    done: doneReducer
})

export default rootReducer;