import axios from "axios";
import React, { useEffect, useState } from "react";
import internal from "stream";
import "./App.css";
import { Bio } from "./components/Bio";
import { CollapsibleContainer } from "./components/CollapsibleContainer";
import { Column } from "./components/Column";
import { Saves } from "./components/Saves";
import { Skills } from "./components/Skills";
import { Stats } from "./components/Stats";

type entry = {
    name: string;
    value: number;
};

type characterResponse = {
    bio: {
        name: string;
        maxHp: number;
        currHp: number;
    };
    skills: entry[];
    stats: entry[];
    saves: entry[];
};
function App() {
    const [character, setCharacter] = useState<characterResponse | undefined>(
        undefined
    );
    useEffect(() => {
        axios.get("/api/character/1").then((data) => {
            console.log(data);
            setCharacter(data.data);
        });
    }, []);

    if (character === undefined) {
        return <div className="body">waiting on data</div>;
    }

    return (
        <div className="app">
            <div className="header">
                <p> hello world </p>
            </div>
            <div className="body">
                <Column>
                    <Stats stats={character.stats} />
                    <Saves saves={character.saves} />
                </Column>
                <Column>
                    <Bio {...character.bio} />
                </Column>
                <Column>
                    <Skills skills={character.skills} />
                </Column>
            </div>
        </div>
    );
}

export default App;
