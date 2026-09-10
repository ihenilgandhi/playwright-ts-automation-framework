import dotenv from 'dotenv';

dotenv.config({
    path: 'config/environments/.env'
});

const config = {
    baseUrl: process.env.BASE_URL
};

export default config;