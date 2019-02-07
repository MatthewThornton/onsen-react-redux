import React from "react";
import * as PropTypes from "prop-types";
import Solver from "../../../../../solvers/expressions_equations/one_variable_equations/Solver";
/**
 * Stitch the correct feedback template to the problem.
 * The problem solver and the generator are typed so everything should match.
 */
const Feedback = ({
    problem // IProblem
}) => {
    return (
      <Solver
        solver={problem.solver}
      />
    );
}
Feedback.propTypes = {
    problem: PropTypes.any.isRequired
}
export default Feedback;