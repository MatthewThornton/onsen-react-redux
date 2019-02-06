/**
 *  Sample Problem Generator. 
 *  This generator interacts with the math-components to construct the math.
 *  The problem configuration will interact with this generator via the options object.
 */
export function createOneStepProblem(options = {}) {
    const defaults = {
        xVal: 5,
        xVar: "x",
        term: 8,
    }
    const settings = {...defaults, ...options};
    return {
        xVal: settings.xVal,
        xVar: settings.xVar,
        term: settings.term,
        rhs: settings.xVal + settings.term,
        equation: `${settings.xVar} + ${settings.term} = ${settings.xVal + settings.term}`
    }
}