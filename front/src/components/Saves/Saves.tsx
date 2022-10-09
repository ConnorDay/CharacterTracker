import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";
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
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Saves</Accordion.Header>
                <Accordion.Body>
                    <Table hover>
                        <tbody>
                            {saves.map((entry) => (
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

export default Saves;
