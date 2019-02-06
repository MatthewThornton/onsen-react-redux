import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import App from "./containers/App";
import Problem from "./containers/Problem";
export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/problem" component={Problem}/>
            </Switch>
        </BrowserRouter>
    )
}