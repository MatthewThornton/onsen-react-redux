import React from "react";
import { Link } from "react-router-dom";
import MathJax from "react-mathjax";

import ViewProblem from "../problem-vault/problems/expressions_equations/one_variable_equations/one_step";

export default class Problem extends React.Component {
    render() {
        return (
            <div>
                <p>Problem View</p>
                <ViewProblem level={1} />
                <Link to="/">
                    <button>Go Home</button>
                </Link>
            </div >
        )
    }
}