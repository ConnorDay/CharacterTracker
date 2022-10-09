import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";
import "./Stats.css";

type StatEntry = {
    name: string;
    value: number;
};

type Props = {
    stats: StatEntry[];
};

function Stats(props: Props) {
    const { stats } = props;
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Stats</Accordion.Header>
                <Accordion.Body>
                    <Table hover>
                        <tbody>
                            {stats.map((entry) => (
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

export default Stats;
