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

// Create base of new character
router.post("/", async (req, res) => {
    const {CampaignId,CharacterName} = req.body;
    if (CampaignId === undefined) {
        res.status(400).send(`campaign id required to be defined`);
        return;
    }
    if (CharacterName === undefined) {
        res.status(400).send(`character name required to be defined`);
        return;
    }
    db.query("SELECT create_character(?, ?)", [req.body.CampaignId, req.body.CharacterName], (err, result, fields) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        const success = (<RowDataPacket> result)[0][fields[0].name];
        if (success === -1) {
            res.status(400).send(`desired ruleset does not exist, cannot create character`)
            return;
        }
        res.status(201).json({CharacterId:success});
        return;
    })
});


// Update character name
router.patch("/:id", async (req, res) => {
    db.query("UPDATE characters SET character_name = ? WHERE id = ?", [req.body.CharacterName, req.params.id], (err, result) => {
        if (err) {
            res.status(404).send(`specified character id does not exist`);
            return;
        }
        res.status(200).send(`ok`);
        return;
    })
});

// Delete character
router.delete("/:id", async (req, res) => {
    db.query("SELECT delete_character(?)", [req.params.id], (err, result, fields) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        const success = (<RowDataPacket> result)[0][fields[0].name];
        if (success === -1) {
            res.status(404).send(`specified character id does not exist`)
            return;
        }
        res.status(200).send(`deleted`);
        return;
    })
});
export default router;
