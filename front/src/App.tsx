import React from "react";
import "./App.css";
import { Bio } from "./components/Bio";
import { CollapsibleContainer } from "./components/CollapsibleContainer";
import { Column } from "./components/Column";
import { Saves } from "./components/Saves";
import { Skills } from "./components/Skills";
import { Stats } from "./components/Stats";

class App extends React.Component {
    constructor(props: { [key: string]: any }) {
        super(props);
    }
    render() {
        const testData = {
            bio: { name: "test", maxHp: 40, currHp: 20 },
            skills: [
                {
                    name: "athletics",
                    value: 4,
                },
                {
                    name: "acrobatics",
                    value: 4,
                },
                {
                    name: "fegli",
                    value: 4,
                },
                {
                    name: "diesel",
                    value: 4,
                },
            ],
            saves: [
                {
                    name: "fortitude",
                    value: -1,
                },
                {
                    name: "horny",
                    value: -99,
                },
                {
                    name: "wis",
                    value: 1,
                },
            ],
            stats: [
                {
                    name: "str",
                    value: 10,
                },
                {
                    name: "dex",
                    value: 9,
                },
                {
                    name: "con",
                    value: 15,
                },
                {
                    name: "int",
                    value: 12,
                },
            ],
        };
        return (
            <div className="app">
                <div className="header">
                    <p> hello world </p>
                </div>
                <div className="body">
                    <Column>
                        <Stats stats={testData.stats} />
                        <Saves saves={testData.saves} />
                    </Column>
                    <Column>
                        <Bio {...testData.bio} />
                    </Column>
                    <Column>
                        <Skills skills={testData.skills} />
                    </Column>
                </div>
            </div>
        );
    }
}

export default App;
