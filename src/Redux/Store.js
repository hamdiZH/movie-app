import {guestReducer} from "./Guest/guestReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";


const reducer = combineReducers({
    guestState: guestReducer,
});

const middlewares = [thunk];

const store = createStore(
    reducer,
    applyMiddleware(...middlewares),
);

export default store;