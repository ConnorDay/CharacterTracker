import React from "react";
import "./App.css";
import { CollapsableContainer } from "./components/CollapsableContainer";

class App extends React.Component {
    constructor(props: { [key: string]: any }) {
        super(props);
    }
    render() {
        return (
            <div className="app">
                <div className="header">
                    <p> hello world </p>
                </div>
                <div className="body">
                    <CollapsableContainer />
                </div>
            </div>
        );
    }
}

export default App;
