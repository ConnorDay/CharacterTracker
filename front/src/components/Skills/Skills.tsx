import React from "react";
import { CollapsibleContainer } from "../CollapsibleContainer";
import "./Skills.css";

type SkillEntry = {
    name: string;
    value: number;
};
type Props = {
    skills: SkillEntry[];
};
type State = {};

class Skills extends React.Component<Props, State> {
    render() {
        const { skills } = this.props;
        return (
            <CollapsibleContainer header="Skills">
                {skills?.map((entry) => (
                    <span>
                        {entry.name}: {entry.value}
                    </span>
                ))}
            </CollapsibleContainer>
        );
    }
}

export default Skills;
