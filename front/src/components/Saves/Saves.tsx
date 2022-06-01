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
type State = {};

class Saves extends React.Component<Props, State> {
    render() {
        const { saves } = this.props;
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
}

export default Saves;
