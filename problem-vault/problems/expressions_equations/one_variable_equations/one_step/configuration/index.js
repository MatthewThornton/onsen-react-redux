import { createOneStepProblem } from "../../../../../generators/expressions_equations/one_variable_equations/one_step/problemGenerator";
import { createProblem } from "./createProblem";
/**
 *  Problem Configuration 
 *  Here is where the problem generators are created for each level. 
 *  Different options are used. Sometimes different generators are used.
 *  The thing that ties these problems together is that they are common 
 *  problem types. They will likely use the same presentation and feedback templates.
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
 * The level config could also should takes an optional course arg. To adjust the level; IE: Grade 7, vs. 8.
 * This way grade 7 and 8 would use the same problem generators but the problems would be scaled according to grade level
 */
export function levelConfiguration(level, course = "grade8") {
    switch (true) {
        case level === 1:
            return createProblem(problemGeneratorLevel1)
        case level === 2:
            return createProblem(problemGeneratorLevel2)
        case level === 3:
            return createProblem(problemGeneratorLevel3)
        case level >= 4:
            return createProblem(problemGeneratorLevel4)
        default:
            return null; // error handling here.
    }
}