import "./CharacterList.css";
import { LoadingCard } from "../../../components/LoadingCard";
import { useEffect, useState } from "react";
import { CharacterSummary } from "../../../../../common/character";
import axios from "axios";
import { CharacterCard } from "../../../components/CharacterCard";
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";

function CharacterList() {
    const navigate = useNavigate();
    const [characters, setCharacters] = useState<
        CharacterSummary[] | undefined
    >(undefined);

    useEffect(() => {
        axios.get("/api/character").then((data) => {
            setCharacters(data.data);
        });
    }, []);

    if (characters === undefined) {
        return <LoadingCard />;
    }

    return (
        <Nav>
            {characters.map((c) => (
                <Nav.Link
                    key={c.CharacterId}
                    href={`character/${c.CampaignId}`}
                >
                    <CharacterCard character={c} />
                </Nav.Link>
            ))}
        </Nav>
    );
}

export default CharacterList;
