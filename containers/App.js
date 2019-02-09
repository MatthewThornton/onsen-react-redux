import React, { Component } from "react";
import InputPreview from "../components/InputPreview";
import { connect } from "react-redux";
import { setMessage } from "../actions/message";
import { Link } from "react-router-dom";

class App extends Component {
    _onChange(value) {
        this.props.dispatch(setMessage(value))
    }
    render() {
        const { message } = this.props.messageReducer;
        return (
            <div>
                <p>{ message } </p>
                <InputPreview
                    value={message}
                    onChange={this._onChange} 
                />
                <h2>One Variable Equations</h2>
                <Link to="/one_step">
                    <button>One Step Equations</button>
                </Link>
                <h2>Geometry</h2>
                <Link to="/circle_area">
                    <button>Circle Area</button>
                </Link>
            </div>
        )
    }
}
export default connect(state => state)(App);