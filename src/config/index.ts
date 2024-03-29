import dotenv from 'dotenv';

dotenv.config();

export const config = {
    port: process.env.PORT || 3000,
    databaseURL: process.env.DATABASE_URI || 'mongodb://localhost:27017/casaguatemala'
}