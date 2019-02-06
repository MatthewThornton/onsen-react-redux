import React from "react";
import * as PropTypes from "prop-types";
import { levelConfiguration } from "./configuration";
import Presentation from "./presentation";

export function spoolProblem(level) {
    const problem = levelConfiguration(level);
    return problem;
}
