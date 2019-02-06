import React from "react";
import * as PropTypes from "prop-types";
import Presenter from "./presenter";

const Presentation = ({
    problemGenerator // type check the generator.
}) => {
    //  We could make a presenter selection based on the generator.
    return <Presenter 
        xVar={problemGenerator.xVar} 
        equation={problemGenerator.equation}
    />;
}
Presentation.propTypes = {
    problemGenerator: PropTypes.any.isRequired
}
export default Presentation;