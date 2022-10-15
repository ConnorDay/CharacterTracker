import "./CharacterList.css";
import { LoadingCard } from "../../../components/LoadingCard";
import { useEffect, useState } from "react";
import { CharacterSummary } from "../../../../../common/character";
import axios from "axios";
import { CharacterCard } from "../../../components/CharacterCard";
import { useNavigate } from "react-router-dom";

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
        <>
            {characters.map((c) => (
                <CharacterCard
                    onClick={() => navigate(c.CharacterId)}
                    key={c.CharacterId}
                    character={c}
                />
            ))}
        </>
    );
}

export default CharacterList;
