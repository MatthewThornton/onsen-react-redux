import { SET_ANSWER } from "../types/answer";
export const setAnswer = (answer) => {
    return dispatch => {
        dispatch({
            type: SET_ANSWER,
            payload: {
                answer
            }
        })
    }
}