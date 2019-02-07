import { createSolver } from "../../../../../solvers/expressions_equations/one_variable_equations/createSolver";
import { createPresenter } from "../../common_presentation/createPresenter";

export function createProblem(problemGenerator) {
    return {
        generator: problemGenerator,
        presenter: createPresenter(problemGenerator),
        solver: createSolver(problemGenerator),
        answer: problemGenerator.xVal // This will be the answer object. Input type, display, and check answer
    }
}