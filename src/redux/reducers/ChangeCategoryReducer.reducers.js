import * as actionTypes from "../actions/ActionTypes.actions";
import initialState from "./InitialState.reducers";

export default function changeCategoryReducer(state=initialState.currentCategory,action){
    switch(action.type){
        case actionTypes.CHANGE_CATEGORY:
            return action.payload;
        default:
           return state;
    }
}