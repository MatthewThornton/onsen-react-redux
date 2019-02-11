import React from "react";
import { Link } from "react-router-dom";
import * as PropTypes from "prop-types";

/**
 * This component will scale to size based on a CSS class name.
 * The device-to-pixel-ratio (dpr) is used to draw final "relative" size.
 */

class Canvas extends React.Component {
    componentDidMount() {
        const canvas = this.refs.canvas
        // Get dpr and screen dimensions from css
        const dpr = window.devicePixelRatio || 1; // dpr
        const rect = canvas.getBoundingClientRect(); // css
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        const ctx = canvas.getContext('2d');
        this.props.draw(ctx);
    }
    render() {
        // The CSS class name controls the size of the canvas drawing.
        return <canvas className={this.props.className ? this.props.className : 'medium'} ref="canvas" />;    
       
    }
}
Canvas.propTypes = {
  className: PropTypes.string,
  draw: PropTypes.func.isRequired
};
export default Canvas