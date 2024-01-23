import dotenv from 'dotenv';
dotenv.config();

export const KEYS = {
    PORT: process.env.PORT || 8080,
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_NAME: process.env.DB_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
}