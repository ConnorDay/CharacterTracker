import express from "express";
import cors from "cors";
import { default as CharacterRouter } from "./routes/character";
import {db} from "./db";


const app = express();
app.use(cors());
app.use(express.json());

const apiRouter = express.Router();

apiRouter.use("/character", CharacterRouter);

app.use("/api", apiRouter);

app.listen(8000, () => {
    console.log("server started");
});
