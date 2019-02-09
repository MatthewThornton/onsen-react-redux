
export function createProblem(problemGenerator) {
    return {
        generator: problemGenerator,
        presenter: "",
        solver: "",
        answer: problemGenerator.area // This will be the answer object. Input type, display, and check answer
    }
}