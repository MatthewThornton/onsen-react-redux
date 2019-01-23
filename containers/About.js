import React from "react";
import { Link } from "react-router-dom";

export default class About extends React.Component {
    render() {
        return (
            <div>
                <p>About</p>
                <Link to="/">
                    <button>Go Home</button>
                </Link>
            </div >
        )
    }
}