import { createStore, combineReducers, applyMiddleware } from "redux"
import answerReducer from "./reducers/answer"
import thunk from "redux-thunk"
const reducer = combineReducers({
  answerReducer
});
const store = createStore(
    reducer,
    applyMiddleware(thunk)
)
export default store;