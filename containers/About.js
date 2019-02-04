import React from "react";
import { Link } from "react-router-dom";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Canvas from "../components/Canvas";
// import MathJax from  "react-mathjax";

function transform(node) {
    /** Replace <canvas-container> with the react-component <Canvas>
      * so that the drawing logic (ctx), and screen sizing can be done before the element is rendered on screen.
    */
    if (node.type === "tag" && node.name ===  "canvas-container") {
        return <Canvas />;
    }
}

export default class About extends React.Component {
    render() {
        /**
         * NOTE: Here is what the object looks like in problem vault.
         * <canvas-container class="tiles" target="problem.algebraTiles">
         *     <canvas width="800" height="300" style="width: 400px; height: 150px;">
         *     </canvas>
         * </canvas-container>
         * 
         * TODO: 
         *  1) we need to detect class="tiles" to know the correct rendering dimensions.
         *  2) we need a way to detect target. That connects the drawing logic to the correct canvas element.
         */
        const canvasString = `<canvas-container class="tiles" target="problem.algebraTiles"> <canvas width="800" height="300" style="width: 400px; height: 150px;"></canvas></canvas-container>`;
        // This would be the template string from the problem payload (problem-vault)
        const mathJax = `<div class="problemEquation">\[  r^{3} \cdot r^{4} \]</div>`;
        const html =
            `<div>Example HTML string from problem-vault</div> <p>Here is a MathJax String:</p> ${mathJax} <p>Here is a canvas-container element. </p>${canvasString} `;
        const open = html.replace(/\[/g, "\\[");
        const close = open.replace(/\]/g, "\\]");
        const cdot = close.replace(/cdot/g, "\\cdot");

        const options = {
            decodeEntities: true,
            transform
        };
        return (
          <div>
            <h1>Problem View Test</h1>
                {ReactHtmlParser(cdot, options)}
            <Link to="/">
              <button>Go Home</button>
            </Link>
          </div>
        );
    }
}