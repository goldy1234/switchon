import {AUTHENTICATE, ADD_TODO,REMOVE_TODO, ADD_INPROGRESS,REMOVE_INPROGRESS, ADD_DONE,REMOVE_DONE} from '../constants';
import {restApi_call} from '../utils/restApi_call';

export function authenticate(data){
    return{
        type: AUTHENTICATE,
        payload: restApi_call(data)
    }
}

export function addToDo(data){
    return{
        type:ADD_TODO,
        payload: data
    }
}

export function removeToDo(index){
    return{
        type:REMOVE_TODO,
        payload:index
    }
}

export function addInProgress(data){
    return{
        type:ADD_INPROGRESS,
        payload: data
    }
}

export function removeInProgress(index){
    return{
        type:REMOVE_INPROGRESS,
        payload:index
    }
}

export function addDone(data){
    return{
        type:ADD_DONE,
        payload:data
    }
}

export function removeDone(index){
    return{
        type:REMOVE_DONE,
        payload:index
    }
}



