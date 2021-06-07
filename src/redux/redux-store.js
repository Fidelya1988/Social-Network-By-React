
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer"

let reducers = combineReducers(

    {

        profile: profileReducer,
        dialogs: dialogsReducer,
        sidebar: sidebarReducer,
        users: usersReducer,
        auth: authReducer
    }
)
let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
export default store;