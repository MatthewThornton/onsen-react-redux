import React from "react";
import { Link } from "react-router-dom";

class Canvas extends React.Component {

    componentDidMount() {
        const canvas = this.refs.canvas
        // Get the device pixel ratio, falling back to 1.
        var dpr = window.devicePixelRatio || 1;
        // Get the size of the canvas in CSS pixels.
        var rect = canvas.getBoundingClientRect();
        // Give the canvas pixel dimensions of their CSS
        // size * the device pixel ratio.
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        var ctx = canvas.getContext('2d');
        // Scale all drawing operations by the dpr, so you
        // don't have to worry about the difference.
        ctx.scale(dpr, dpr);

        // The canvas drawing logic will come from the problem-vault problem payload 'data`
        ctx.beginPath();
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.moveTo(0, 0);
        ctx.lineTo(200, 100);
        ctx.stroke();
    }
    render() {
        // The CSS class name controls the size of the canvas drawing.
        // TODO: How to get the className from the problem vault?
        return <canvas className="canvas-size" ref="canvas" />;    
    }
}
export default Canvas