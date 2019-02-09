import React from "react";
import { Link } from "react-router-dom";

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

        // The canvas drawing logic will come from the problem-vault problem payload 'data`
        ctx.beginPath();
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx.stroke();
    }
    render() {
        // The CSS class name controls the size of the canvas drawing.
        // TODO: How to get the className from the problem vault?
        return <canvas className="canvas-size" ref="canvas" />;    
    }
}
export default Canvas