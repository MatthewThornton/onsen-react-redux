import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import App from "./containers/App";
import ProblemView from "./containers/ProblemView";
export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/problem_view" component={ProblemView}/>
            </Switch>
        </BrowserRouter>
    )
}