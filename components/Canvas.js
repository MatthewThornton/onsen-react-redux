import React from "react";
import { Link } from "react-router-dom";
import * as PropTypes from "prop-types";

class Canvas extends React.Component {

    componentDidMount() {

        const canvas = this.refs.canvas
        // Get dpr and screen dimensions from css
        const dpr = window.devicePixelRatio || 1; // dpr
        const rect = canvas.getBoundingClientRect(); // css
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        const ctx = canvas.getContext('2d');
        ctx.scale(dpr, dpr);

        // TODO figure out how to get the drawing object context from the problem object.
        ctx.beginPath();
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx.stroke();
    }
    render() {
        // The CSS class name controls the size of the canvas drawing.
        return <canvas className={this.props.className ? this.props.className : 'medium'} ref="canvas" />;    
    }
}
Canvas.propTypes = {
  className: PropTypes.string.isRequired
};
export default Canvas