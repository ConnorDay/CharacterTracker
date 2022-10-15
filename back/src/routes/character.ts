import { Router } from "express";

const router = Router();

// Get a list of all characters
router.get("/", async (req, res) => {
    res.json(["1", "2", "3"]);
});

export default router;
