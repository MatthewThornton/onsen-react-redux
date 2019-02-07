import React from "react";
import * as PropTypes from "prop-types";
import Presenter from "../../common_presentation/Presenter";

/**
 * This is where the problem formating would occur. 
 * IE: printing, fixing decimals, currency ect.
 * In this simple example no formatting is necessary
 */
const Presentation = ({
    problem 
}) => {
    //  We could make a presenter selection based on the generator.
    return <Presenter 
       presenter={problem.presenter}
    />;
}
Presentation.propTypes = {
    problem: PropTypes.any.isRequired
}
export default Presentation;