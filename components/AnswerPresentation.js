import * as PropTypes from "prop-types";
import React from "react";

/**
 * The Answer presentation mechanism will need to be selectable by the current problem generation.
 *      - AnswerPresenterType (from IProblemAnswer )  Should this be in the problem-vault or app? 
 *              - This would cover things like. 
 *                      Present answer solution as:
 *                              -  equation  (mathJax required)
 *                              -  number || text
 *                              -  do we need to add units IE:  4 cm^3  (This my require mathJax)
 */

const AnswerPresentation = ({
    answer
}) => {
    // logic to select correct answer presentation type based on answer
    // Answer given must come from state.
    return (
        <div className="feedbackArea">
            <p> <b>Correct Answer: </b></p>
            <div className="problemEquation">
                {answer}
            </div>
            <p> <b>You Answered:</b> </p>
            <div className="problemEquation">
                
            </div>
        </div>
    )
}

AnswerPresentation.propTypes = {
    answer: PropTypes.any.isRequired,
};
export default AnswerPresentation;
