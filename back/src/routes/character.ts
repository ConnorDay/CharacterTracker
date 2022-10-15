import { Router } from "express";
import { CharacterSummary } from "../../../common/character";

const router = Router();

// Get a list of all characters
router.get("/", async (req, res) => {
    res.json(["1", "2", "3"]);
});

router.get("/:id", async (req, res) => {
    const character: CharacterSummary = {
        CharcterName: "Name",
        CharacterId: "whatkfdsa",
    };
});

export default router;
