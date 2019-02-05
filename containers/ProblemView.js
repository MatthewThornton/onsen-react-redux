import React from "react";
import { Link } from "react-router-dom";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Canvas from "../components/Canvas";
import OneStep from "../problem_vault/one_step_equation/Presentation"

export default class ProblemView extends React.Component {
    render() {
        return (
          <div>
            <h1>Problem View Test</h1>
            <OneStep />
            <Link to="/">
              <button>Go Home</button>
            </Link>
          </div>
        );
    }
}