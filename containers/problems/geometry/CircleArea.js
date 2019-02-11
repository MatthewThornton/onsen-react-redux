import React from "react";
import { Link } from "react-router-dom";
import AnswerPresentation from "../../../components/AnswerPresentation";

import spoolProblem from "../../../problem-vault/problems/geometry/circles/area";
import Presentation from "../../../problem-vault/problems/geometry/circles/area/presentation";
import Canvas from "../../../components/Canvas";

export default class CircleArea extends React.Component {
  render() {
    const level = 1; // Level would be controlled by the state.
    const problem = spoolProblem(level);
    return (
      <div>
        <Presentation problem={problem} />
        <Canvas  
          className={"small"}
          draw={problem.generator.circle}
        />
        <AnswerPresentation answer={problem.answer} />
      </div>
    );
  }
}
