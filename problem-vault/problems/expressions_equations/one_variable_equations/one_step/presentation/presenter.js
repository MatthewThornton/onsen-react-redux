import React from "react";
import { Link } from "react-router-dom";
import MathJax from "react-mathjax";
import * as PropTypes from "prop-types";

const Presenter = ({
    xVar,
    equation
 }) => (
    <MathJax.Provider>
        <div>
            <p>Find the value of <MathJax.Node inline formula={xVar} /></p>
        
            <div className="problemEquation">
                <MathJax.Node formula={equation} />
            </div>
                
        </div>
    </MathJax.Provider>
);

Presenter.propTypes = {
    xVar: PropTypes.string.isRequired,
    equation: PropTypes.string.isRequired,
};
export default Presenter;
