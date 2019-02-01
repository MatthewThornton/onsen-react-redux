import React from "react";
import { Link } from "react-router-dom";

class Canvas extends React.Component {
    componentDidMount() {
        // The canvas drawing logic will come from the problem-vault problem payload 'data`
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.moveTo(0, 0);
        ctx.lineTo(200, 100);
        ctx.stroke();
    }
    render() {
        /**
         * We can add some screen size detection logic here to set the width and height. 
         */ 
        const dpr = window.devicePixelRatio || 1;
        const w = 300 * dpr;
        const h = 400 * dpr;
        return <canvas ref="canvas" width={w} height={h} />;    
    }
}
export default Canvas