/**
 * This is where the Presenter formating would occur. 
 * IE: printing, fixing decimals, currency ect.
 * Likely an external "solver" would be called to get the formatted objects.
 * In this simple example no formatting is necessary
 */
export function createPresenter(
    problemGenerator // problemGenerator will by typed to insure correct match.
) {
    // In a a real example there will be formatting required. IE: simplifying  and printing the equation.
    const { xVar, equation } = problemGenerator;

    return {
        xVar,
        equation
    }
}
