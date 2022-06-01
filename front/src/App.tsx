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
                    <CollapsibleContainer header="This is the header">
                        <p>this is a sentence</p>
                        <p>this is a sentence</p>
                        <p>this is a sentence</p>
                    </CollapsibleContainer>
                </div>
            </div>
        );
    }
}

export default App;
