import React from "react";
import * as PropTypes from "prop-types";
import Solver from "./Solver";

/**
 * This is where the feedback formating would occur. 
 * IE: printing, fixing decimals, currency ect.
 * Likely an external "solver" would be called to get the formatted objects.
 * In this simple example no formatting is necessary
 */
export function createSolver(
    problemGenerator // problemGenerator
){
    const {xVar, xVal, term, rhs } = problemGenerator;

    // In a real example there will be formatting required. IE: simplification and printing 
    const subtract = `\\class{red}{ - ${term}}`;
    const step1 = `${xVar} + ${term} ${subtract} = ${rhs} ${subtract}`;
    const solution = `${xVar} = ${xVal}`;

    return {
        term,
        step1,
        solution
    }
}
