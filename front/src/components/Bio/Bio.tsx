import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
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
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Bio</Accordion.Header>
                <Accordion.Body>
                    <Container>
                        <Row>{name}</Row>
                        <Row>
                            {currHp} / {maxHp}
                        </Row>
                        {otherFields?.map((entry) => (
                            <Row>
                                {entry.key}: {entry.value}
                            </Row>
                        ))}
                    </Container>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Bio;
