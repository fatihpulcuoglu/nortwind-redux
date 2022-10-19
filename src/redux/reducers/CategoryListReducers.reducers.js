import * as actionTypes from "../actions/ActionTypes.actions";
import initialState from "./InitialState.reducers";

export default function categoryListReducer(state=initialState.categories,action){
    switch(action.type){
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}