import "./CharacterSheet.css";
import { useParams } from "react-router-dom";
import { Bio } from "../../../components/Bio";
import { Column } from "../../../components/Column";
import { Saves } from "../../../components/Saves";
import { Skills } from "../../../components/Skills";
import { Stats } from "../../../components/Stats";

function CharacterSheet() {
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
    const params = useParams();
    return (
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
    );
}
export default CharacterSheet;
