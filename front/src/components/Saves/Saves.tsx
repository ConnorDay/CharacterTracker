import React from "react";
import { CollapsibleContainer } from "../CollapsibleContainer";
import "./Saves.css";

type SaveEntry = {
    name: string;
    value: number;
};
type Props = {
    saves: SaveEntry[];
};

function Saves(props: Props) {
    const { saves } = props;
    return (
        <CollapsibleContainer header="Saves">
            {saves.map((entry) => (
                <span>
                    {entry.name}: {entry.value}
                </span>
            ))}
        </CollapsibleContainer>
    );
}

export default Saves;
