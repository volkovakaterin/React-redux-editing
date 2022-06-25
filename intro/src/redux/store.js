import {combineReducers, legacy_createStore} from "redux";
import estimateReducer from "./estimateReducer";

function configureStore(state) {
    return legacy_createStore(
        combineReducers({
         estimateReducer,
         // ....
         // ....   
        })
        );
}

export default configureStore;