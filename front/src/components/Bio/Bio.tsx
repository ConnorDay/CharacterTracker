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

function Bio(props: Props) {
    const { name, maxHp, currHp, otherFields } = props;
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

export default Bio;
