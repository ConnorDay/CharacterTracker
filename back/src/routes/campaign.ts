import { Router } from "express";
import { RowDataPacket } from "mysql2";
import { Campaign } from "../../../common/campaign";
import { db } from "../db";

const router = Router();

// Get a list of all characters
router.get("/", async (req, res) => {
    db.query("SELECT * FROM campaigns", (err, result) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        
        const rows = (<RowDataPacket> result);
        const campaign_list = [];
        for (let i=0; i < rows.length; i++) {
            const row = rows[i];
            const campaign: Campaign = {
                CampaignId: row.id,
                CampaignName: row.campaign_name,
                RulesetId: row.ruleset_id,
            }
            campaign_list.push(campaign);
        }
        res.json(campaign_list);
    })
});

// Get a specific character
router.get("/:id", async (req, res) => {
    db.query("SELECT * FROM campaigns WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        const row = (<RowDataPacket> result)[0];
        if (row === undefined) {
            res.status(404).send(`campaign id ${[req.params.id]} not found`);
            return;
        }
        
        const campaign: Campaign = {
            CampaignId: row.id,
            CampaignName: row.campaign_name,
            RulesetId: row.ruleset_id,
        }
        res.json(campaign);
    })
});

// Create new campaign
router.post("/", async (req, res) => {
    const {CampaignName,RulesetId} = req.body;
    if (CampaignName === undefined) {
        res.status(400).send(`campaign name required to be defined`);
        return;
    }
    if (CampaignName.length > 255) {
        res.status(400).send(`campaign name must be shorter than 256 characters`);
        return;
    }
    if (RulesetId === undefined) {
        res.status(400).send(`ruleset id required to be defined`);
        return;
    }
    db.query("SELECT create_campaign(?, ?)", [req.body.CampaignName, req.body.RulesetId], (err, result, fields) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        const success = (<RowDataPacket> result)[0][fields[0].name];
        if (success === -1) {
            res.status(400).send(`desired ruleset does not exist, cannot create campaign`)
            return;
        }
        res.status(201).json({CampaignId:success});
        return;
    })
});


// Update character name
router.patch("/:id", async (req, res) => {
    if (req.body.CampaignName === undefined && req.body.RulesetId === undefined) {
        res.status(400).send(`insufficient information provided`)
        return;
    }
    if (req.body.CampaignName !== undefined && req.body.CampaignName.length > 255) {
        res.status(400).send(`campaign name must be shorter than 256 characters`);
        return;
    }
    db.query("SELECT update_campaign(?,?,?)", [req.params.id, req.body.CampaignName, req.body.RulesetId], (err, result, fields) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        const success = (<RowDataPacket> result)[0][fields[0].name];
        if (success === -1) {
            res.status(404).send(`specified campaign id does not exist`)
            return;
        }
        if (success === -2) {
            res.status(400).send(`specified ruleset id does not exist`)
            return;
        }
        res.status(200).send(`ok`);
        return;
    });
    
    
});

// Delete character
router.delete("/:id", async (req, res) => {
    db.query("SELECT delete_campaign(?)", [req.params.id], (err, result, fields) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        const success = (<RowDataPacket> result)[0][fields[0].name];
        if (success === -1) {
            res.status(404).send(`specified campaign id does not exist`)
            return;
        }
        res.status(200).send(`deleted`);
        return;
    })
});
export default router;
