import { createStore, combineReducers, applyMiddleware } from "redux"
import messageReducer from "./reducers/message"
import answerReducer from "./reducers/answer"
import thunk from "redux-thunk"
const reducer = combineReducers({
  messageReducer,
  answerReducer
});
const store = createStore(
    reducer,
    applyMiddleware(thunk)
)
export default store;