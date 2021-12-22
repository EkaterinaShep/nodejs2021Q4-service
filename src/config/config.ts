import process from 'process';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || '127.0.0.1';

export { PORT, HOST };
