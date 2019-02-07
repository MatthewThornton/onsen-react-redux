import * as PropTypes from "prop-types";
import React from "react";

/**
 * The Answer input mechanism will need to be selectable by the current problem generation.
 *   InputType: 
 *      -  SCI_CALCULATOR   (free entry)
 *      -  CALCULATOR
 *      -  NUMBER_PAD
 *      -  MULTIPLE_CHOICE
 *   answer prop will come from the new "IProblemAnswer" object from problem-vault.
 *      - Correct answer (from IProblemAnswer)
 *      - Answer given: (comes from the state. Starts as null)
 *      - InputType (from IProblemAnswer)
 *      - AnswerPresenterType (from IProblemAnswer )  Should this be in the problem-vault or app? 
 *              - This would cover things like. 
 *                      Present answer solution as:
 *                              -  equation  (mathJax required)
 *                              -  number || text
 *                              -  do we need to add units IE:  4 cm^3  (This my require mathJax)
 */

 const AnswerInput = ({
    answer
 }) => {
     // logic to select correct input type based on answer
     return (
         <div>
             <input
                 type="text"
             />
         </div>
     )
 }

AnswerInput.propTypes = {
    answer: PropTypes.any.isRequired,
};
export default AnswerInput;
