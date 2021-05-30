"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { DB_NAME, DB_USER, PASSWORD, DB_HOST } = process.env;
exports.database = new sequelize_1.Sequelize(`postgres://${DB_USER}:${PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    logging: false,
    native: false
});
