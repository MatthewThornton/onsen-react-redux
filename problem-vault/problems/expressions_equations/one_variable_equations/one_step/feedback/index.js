import React from "react";
import * as PropTypes from "prop-types";
import Solver from "./solver";

/**
 * This is where the feedback formating would occur. 
 * IE: printing, fixing decimals, currency ect.
 * Likely an external "solver" would be called to get the formatted objects.
 * In this simple example no formatting is necessary
 */
const Feedback = ({
    problemGenerator // type check the generator.
}) => {
    const {xVar, xVal, term, rhs } = problemGenerator;

    // These objects could come from an common solver function.
    const subtract = `\\class{red}{ - ${term}}`;
    const step1 = `${xVar} + ${term} ${subtract} = ${rhs} ${subtract}`;
    const solution = `${xVar} = ${xVal}`;

    return (
      <Solver
        term={term} //Wrap in a decimal function.
        step1={step1}
        solution={solution}
      />
    );
}
Feedback.propTypes = {
    problemGenerator: PropTypes.any.isRequired
}
export default Feedback;