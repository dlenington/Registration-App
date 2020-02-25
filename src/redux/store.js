import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";

//import reducers

const initialState = {};

const reducers = combineReducers({});

const store = createStore(
  reducers,
  initialState,
  compose(applyMiddleware(...middleware))
);

export default store;
