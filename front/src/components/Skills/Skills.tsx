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

function Skills(props: Props) {
    const { skills } = props;
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

export default Skills;
