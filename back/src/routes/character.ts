import { Router } from "express";
import { RowDataPacket } from "mysql2";
import { Character,CharacterSummary } from "../../../common/character";
import { db } from "../db";

const router = Router();

// Get a list of all characters
router.get("/", async (req, res) => {
    db.query("SELECT * FROM characters", (err, result) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        
        const rows = (<RowDataPacket> result);
        const character_list = [];
        for (let i=0; i < rows.length; i++) {
            const row = rows[i];
            const character: Character = {
                CharacterId: row.id,
                CampaignId: row.campaign_id,
                CharacterName: row.character_name,
            }
            character_list.push(character);
        }
        res.json(character_list);
    })
});

// Get a specific character
router.get("/:id", async (req, res) => {
    db.query("SELECT * FROM characters WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        const row = (<RowDataPacket> result)[0];
        if (row === undefined) {
            res.status(404).send(`character id ${[req.params.id]} not found`);
            return;
        }
        
        const character: Character = {
            CharacterId: row.id,
            CampaignId: row.campaign_id,
            CharacterName: row.character_name,
        }
        res.json(character);
    })
});

export default router;
