import React from "react";
import { Link } from "react-router-dom";
import MathJax from "react-mathjax";
import * as PropTypes from "prop-types";

const Solver = ({
    term,
    step1,
    solution
 }) => (
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
);

Solver.propTypes = {
    term: PropTypes.number.isRequired,
    step1: PropTypes.string.isRequired,
    solution: PropTypes.string.isRequired,
};
export default Solver;
