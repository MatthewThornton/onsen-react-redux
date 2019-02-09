import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import App from "./containers/App";
//  Problems 
import OneStep from "./containers/problems/one_variable_equations/OneStep";
import CircleArea from "./containers/problems/geometry/CircleArea";

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/one_step" component={OneStep}/>
                <Route path="/circle_area" component={CircleArea}/>
            </Switch>
        </BrowserRouter>
    )
} 