import { SET_ANSWER } from "../types/answer";
const initState = {
    answer: ""
}
export default (state = initState, action) => {
    switch (action.type) {
        case SET_ANSWER:
            return {...state, answer: action.payload.answer }
        default:
            return state
    }
}