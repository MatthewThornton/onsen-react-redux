import * as React from "react";
// import MathJax from "react-mathjax";
// import { Provider} from "../../node_modules/react-mathjax/lib/Provider";
console.log("Import: ", require("react-mathjax"));
const tex = `3x = 12`

const OneStep = ({ }) => (
<div>test</div>
);
export default OneStep;
/** 
 *     <MathJax.Provider>
        <div>
            Find the value of <MathJax.Node inline formula={'x'} />
            <div className="problem-equation">
                <MathJax.Node formula={tex} />
            </div>
        </div>
    </MathJax.Provider>
 */