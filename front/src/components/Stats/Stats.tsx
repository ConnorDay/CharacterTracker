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
type State = {};

class Stats extends React.Component<Props, State> {
    render() {
        const { stats } = this.props;
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
}

export default Stats;
