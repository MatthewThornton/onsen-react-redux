import React from "react";
import { Link } from "react-router-dom";
import MathJax from "react-mathjax";
import * as PropTypes from "prop-types";

/**
 * This would be a "smart" solver that could detect from the
 * feedbackSolver object how to format the template.
 */
const Solver = ({
    solver
 }) => {
    const { step1, term, solution } = solver;
    return (
        <MathJax.Provider>
            <div>
                <p>Subtract <MathJax.Node inline formula={term} />.</p>
                <div className="problemEquation">
                    <MathJax.Node formula={step1} />
                </div>
                <p>Simplify.</p>
                <div className="problemEquation">
                    <MathJax.Node formula={solution} />
                </div>
            </div>
        </MathJax.Provider>
    )
};

Solver.propTypes = {
    solver: PropTypes.any.isRequired,
};
export default Solver;
