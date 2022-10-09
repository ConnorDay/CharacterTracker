import "./CharacterSheet.css";
import { useParams } from "react-router-dom";
import { Bio } from "../../../components/Bio";
import { Column } from "../../../components/Column";
import { Saves } from "../../../components/Saves";
import { Skills } from "../../../components/Skills";
import { Stats } from "../../../components/Stats";
import { useEffect, useState } from "react";
import axios from "axios";

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
function CharacterSheet() {
    const params = useParams();
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
    );
}
export default CharacterSheet;
