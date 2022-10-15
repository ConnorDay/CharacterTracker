import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
export function LoadingCard() {
    return (
        <Card style={{ width: "18rem", cursor: "wait" }}>
            <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={7} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                    <Placeholder xs={5} /> <Placeholder xs={3} />
                </Placeholder>
            </Card.Body>
        </Card>
    );
}
