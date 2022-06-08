import React from "react";
import { CollapsibleContainer } from "../CollapsibleContainer";
import "./Stats.css";

type StatEntry = {
    name: string;
    value: any;
};

type Props = {
    stats: StatEntry[];
};

function Stats(props: Props) {
    const { stats } = props;
    return (
        <CollapsibleContainer header="Stats">
            {stats?.map((entry) => (
                <span>
                    {entry.name}: {entry.value}
                </span>
            ))}
        </CollapsibleContainer>
    );
}

export default Stats;
