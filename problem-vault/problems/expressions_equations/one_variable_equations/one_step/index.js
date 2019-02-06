import React from "react";
import * as PropTypes from "prop-types";
import { levelConfiguration } from "./configuration";
import Presentation from "./presentation";

const SpoolProblem = ({
    level
}) => {
    const config = levelConfiguration(level);
    return <Presentation problemGenerator={config.generator} />;
}
Presentation.propTypes = {
    level: PropTypes.number.isRequired,
}

export default SpoolProblem;
