import React from "react";
import { Link } from "react-router-dom";
import MathJax from "react-mathjax";
import * as PropTypes from "prop-types";

const Presenter = ({
    presenter // will be type checked to ensure match
 }) => (
    <div>
        <p>Find the area of the circle.</p>
    </div>
);

Presenter.propTypes = {
    presenter: PropTypes.any.isRequired,
};
export default Presenter;
