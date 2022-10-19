import * as actionTypes from "../actions/ActionTypes.actions";
import initialState from "./InitialState.reducers";

export default function productListReducers(state=initialState.products,action){
    switch(action.type){
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}