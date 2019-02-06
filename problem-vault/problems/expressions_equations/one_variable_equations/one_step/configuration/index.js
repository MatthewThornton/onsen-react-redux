import React from "react";
import { Link } from "react-router-dom";
import MathJax from "react-mathjax";

import Presenter from "../presentation/presenter";
import { createOneStepProblem } from "../../../../../generators/expressions_equations/one_variable_equations/one_step/problemGenerator";

/**
 *  Problem Configuration 
 *  Here is where the problem generators are created for each level. 
 *  Different options are used. Sometimes different generators are used.
 *  The thing that ties these problems together is that they are common 
 *  problem type. They will likely use the same presentation and feedback templates.
 */
const problemGeneratorLevel1 = createOneStepProblem();
const problemGeneratorLevel2 = createOneStepProblem({
    xVar: "y",
    xVal: 12,
    term: 25
});
const problemGeneratorLevel3 = createOneStepProblem({
    xVar: "z",
    xVal: 2,
    term: 5
});
const problemGeneratorLevel4 = createOneStepProblem({
    xVar: "y",
    xVal: -4,
    term: 1
});

/**
 * Level:  The current practice level. This comes from the app.
 * The level configuration could have an array of possible generators and use some logic to select one.
 * The level config could also take an optional course arg. To adjust the level; IE: Grade 7, vs. 8.
 * This way grade 7 and 8 would use the same problem generators but the problems would be scaled
 */
export function levelConfiguration(level, course = "grade8") {
    switch (true) {
        case level === 1:
            return {
                generator: problemGeneratorLevel1,
                solver: "", // This will be a solver object. Needed for the feedback template.
                answer: problemGeneratorLevel1.xVal // This will be the answer object. Input type, display, and check answer
            };
        case level === 2:
            return {
                generator: problemGeneratorLevel2,
                solver: "",
                answer: problemGeneratorLevel2.xVal,
            }
        case level === 3:
            return {
                generator: problemGeneratorLevel3,
                solver: "",
                answer: problemGeneratorLevel3.xVal,
            }
        case level >= 4:
            return {
                generator: problemGeneratorLevel4,
                solver: "",
                answer: problemGeneratorLevel4.xVal,
            }
        default:
            return null; // error handling here.
    }
}