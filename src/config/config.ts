import process from 'process';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const PORT = process.env['PORT'] || 4000;
const HOST = process.env['HOST'] || '127.0.0.1';
const ERR_FILE_PATH = path.resolve(__dirname, '../../err-data.log');

export { PORT, HOST, ERR_FILE_PATH };
