import React from "react";
import { Link } from "react-router-dom";
import MathJax from "react-mathjax";

// TODO: Think about a way to simplify these imports. 
import { spoolProblem } from "../problem-vault/problems/expressions_equations/one_variable_equations/one_step";
import Presentation from "../problem-vault/problems/expressions_equations/one_variable_equations/one_step/presentation";
import Feedback from "../problem-vault/problems/expressions_equations/one_variable_equations/one_step/feedback";

export default class Problem extends React.Component {
    render() {
        const level = 1;
        const problem = spoolProblem(level);
        // TODO:  Refactor presentation and feedback to take a general problem object.
        return (
            <div>
                <h1>Presentation View</h1>
                <Presentation problemGenerator={problem.generator}/>

                <h1>Answer </h1>
                <p> The answer is { problem.answer }.</p>

                <h1>Feedback </h1>
                <Feedback problemGenerator={problem.generator} />

                <Link to="/">
                    <button>Go Home</button>
                </Link>
            </div >
        )
    }
}