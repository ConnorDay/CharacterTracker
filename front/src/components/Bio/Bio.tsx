import React from "react";
import { CollapsibleContainer } from "../CollapsibleContainer";
import "./Bio.css";

type BioEntry = {
    key: string;
    value: any;
};

type Props = {
    name: string;
    maxHp: number;
    currHp: number;
    otherFields?: BioEntry[];
};
type State = {};

class Bio extends React.Component<Props, State> {
    render() {
        const { name, maxHp, currHp, otherFields } = this.props;
        return (
            <CollapsibleContainer header="Bio">
                <span>{name}</span>
                <span>
                    {currHp} / {maxHp}
                </span>
                {otherFields?.map((entry) => (
                    <span>
                        {entry.key}: {entry.value}
                    </span>
                ))}
            </CollapsibleContainer>
        );
    }
}

export default Bio;
