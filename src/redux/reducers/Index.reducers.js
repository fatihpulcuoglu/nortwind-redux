import {combineReducers} from "redux";
import changeCategoryReducer from "./ChangeCategoryReducer.reducers";
import categoryListReducer from './CategoryListReducers.reducers';
import productListReducers from "./ProductListReducers.reducers";

const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducers
})

export default rootReducer