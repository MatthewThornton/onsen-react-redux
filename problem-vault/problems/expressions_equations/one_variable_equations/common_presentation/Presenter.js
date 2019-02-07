import React from "react";
import { Link } from "react-router-dom";
import MathJax from "react-mathjax";
import * as PropTypes from "prop-types";

const Presenter = ({
    presenter // will be type checked to ensure match
 }) => (
    <MathJax.Provider>
        <div>
            <p>Find the value of <MathJax.Node inline formula={presenter.xVar} />.</p>   
            <div className="problemEquation">
                <MathJax.Node formula={presenter.equation} />
            </div>     
        </div>
    </MathJax.Provider>
);

Presenter.propTypes = {
    presenter: PropTypes.any.isRequired,
};
export default Presenter;
