import {applyMiddleware, createStore} from "redux";
import rootReducer from "./Index.reducers";
import thunk from "redux-thunk";

export default function configureStore(){
    return createStore(rootReducer,applyMiddleware(thunk));
}