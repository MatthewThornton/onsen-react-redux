import React from "react";
import { Link } from "react-router-dom";
import AnswerInput from "../../../components/AnswerInput";
import AnswerPresentation from "../../../components/AnswerPresentation";

import spoolProblem from "../../../problem-vault/problems/expressions_equations/one_variable_equations/one_step";
import Presentation from "../../../problem-vault/problems/expressions_equations/one_variable_equations/one_step/presentation";
import Feedback from "../../../problem-vault/problems/expressions_equations/one_variable_equations/one_step/feedback";

export default class OneStep extends React.Component {
    render() {
        const level = 1; // Level would be controlled by the state. 
        const problem = spoolProblem(level);
        /**
         * The problem state controls whether you see the presentation or feedback view.
         * In this simple example state in the problem life cycle has not been established.
        */
        return (
            <div>
                <Presentation problem={problem} />

                <AnswerPresentation answer={problem.answer} />
                <h3>Let's walk through the problem</h3>
                <Presentation problem={problem} />
                <Feedback problem={problem} />
            </div>
        )
    }
}