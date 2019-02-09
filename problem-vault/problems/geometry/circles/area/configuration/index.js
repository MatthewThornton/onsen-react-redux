import { createOneStepProblem } from "../../../../../generators/expressions_equations/one_variable_equations/one_step/problemGenerator";
import { createProblem } from "./createProblem";
/**
 *  Problem Configuration 
 *  Here is where the problem generators are created for each level. 
 *  Different options are used. Sometimes different generators are used.
 *  The thing that ties these problems together is that they are common 
 *  problem types. They will likely use the same presentation and feedback templates.
 */
const problemGenerator = {
    xVar: "r",
    radius: 5,
    area: 5 * 5 * 3.14
}

/**
 * Level:  The current practice level. This comes from the app.
 * The level configuration could have an array of possible generators and use some logic to select one.
 * The level config could also should takes an optional course arg. To adjust the level; IE: Grade 7, vs. 8.
 * This way grade 7 and 8 would use the same problem generators but the problems would be scaled according to grade level
 */
export function levelConfiguration(level, course = "grade8") {
    switch (true) {
        case level === 1:
            return createProblem(problemGenerator);
        case level === 2:
            return createProblem(problemGenerator);
        case level === 3:
            return createProblem(problemGenerator);
        case level >= 4:
            return createProblem(problemGenerator);
        default:
            return null; // error handling here.
    }
}