import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer  from "./sidebarReducer";

let reducers = combineReducers(
    
    {
        profile: profileReducer,
        dialogs: dialogsReducer,
        sidebar: sidebarReducer
    }
)
let store = createStore(reducers);
console.log(store)
window.store  = store;
export default store;