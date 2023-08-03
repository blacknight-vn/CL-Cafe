import { legacy_createStore, combineReducers } from "redux";
import reducerStore from "./reducerStore";

let storeCombine = combineReducers({
    reducerStore,
})

let store = legacy_createStore(storeCombine);

export default store;