import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";
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
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Skills</Accordion.Header>
                <Accordion.Body>
                    <Table hover>
                        <tbody>
                            {skills?.map((entry) => (
                                <tr>
                                    <td>{entry.name}</td>
                                    <td>{entry.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Skills;
