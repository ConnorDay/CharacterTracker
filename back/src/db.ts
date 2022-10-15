import mysql from "mysql2";
import * as dotenv from "dotenv";
import { OkPacket, RowDataPacket } from "mysql2";
import { Character, CharacterSummary } from "../../common/character";
dotenv.config();

export const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME
});

export const create = (character: Character, callback: Function) => {
    const queryString = "INSERT INTO ProductOrder (id, campaign_id, character_name) VALUES (?, ?, ?)"
  
    db.query(
      queryString,
      [character.CharacterId, character.CampaignId, character.CharacterName],
      (err, result) => {
        if (err) {callback(err)};
  
        const insertId = (<OkPacket> result).insertId;
        callback(null, insertId);
      }
    );
  };