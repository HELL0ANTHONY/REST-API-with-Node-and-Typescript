import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const {
  DB_NAME,
  DB_USER,
  PASSWORD,
  DB_HOST
} = process.env;

export const database = new Sequelize(`postgres://${DB_USER}:${PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false,
  native: false
});
