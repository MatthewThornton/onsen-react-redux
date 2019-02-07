import React from "react";
import { Link } from "react-router-dom";
import AnswerInput from "../components/AnswerInput";
import AnswerPresentation from "../components/AnswerPresentation";
/**
 * Currently the path is given in the curriculums package. IE: 'expressions_equations/one_variable_equations/one_step'
 * The presentation and feedback react components would be in the same relative location. IE: /presentation or /feedback
 */
import spoolProblem from "../problem-vault/problems/expressions_equations/one_variable_equations/one_step";
import Presentation from "../problem-vault/problems/expressions_equations/one_variable_equations/one_step/presentation";
import Feedback from "../problem-vault/problems/expressions_equations/one_variable_equations/one_step/feedback";

export default class ProblemView extends React.Component {
    render() {
        const level = 1; // Level would be controlled by the state. 
        const problem = spoolProblem(level);
        /**
         * The problem state controls whether you see the presentation or feedback view.
         * In this simple example state in the problem life cycle has not be established.
        */
        const stupidState = "problem"; // problem || feedback
        if (stupidState === "problem") {
            return (
                <div>
                    <Presentation problem={problem} />
                    <AnswerInput answer={problem.answer} />
                </div>
            )
        } else if (stupidState === "feedback") {
            return (
                <div>
                    <AnswerPresentation answer={problem.answer} />
                    <h3>Let's walk through the problem</h3>
                    <Presentation problem={problem} />
                    <Feedback problem={problem} />
                </div>
            )
        }
    }
}