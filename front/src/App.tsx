import React from "react";
import "./App.css";
import { CollapsibleContainer } from "./components/CollapsibleContainer";

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
                    <CollapsibleContainer>
                        <p className="ccheader">this is a header</p>
                        <div className="ccbody">
                            <p>this is a sentence</p>
                            <p>this is a sentence</p>
                            <p>this is a sentence</p>
                        </div>
                    </CollapsibleContainer>
                </div>
            </div>
        );
    }
}

export default App;
