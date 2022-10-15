import { CharacterSummary } from "../../../../common/character";
import { Card } from "react-bootstrap";
interface Props {
    character: CharacterSummary;
    onClick?: () => void;
}
export function CharacterCard(props: Props) {
    const { character, onClick } = props;
    return (
        <Card onClick={onClick} style={{ width: "18rem", cursor: "pointer" }}>
            <Card.Body>
                <Card.Title>{character.CharacterName}</Card.Title>
                <Card.Text>Some text will go here</Card.Text>
            </Card.Body>
        </Card>
    );
}
