import process from 'process';
import dotenv from 'dotenv';
import path from 'path';
import { logLevels } from '../constants/constants';

dotenv.config();

const PORT = process.env['PORT'] || 4000;
const HOST = process.env['HOST'] || '0.0.0.0';
const ERR_FILE_PATH = path.resolve(__dirname, '../../logs/err.log');
const ALL_LOG_DATA_FILE_PATH = path.resolve(__dirname, '../../logs/all.log');
const LOG_LEVEL =
  (process.env['LOG_LEVEL'] as unknown as keyof typeof logLevels) || '5';
const LOG_LEVEL_NAME = logLevels[LOG_LEVEL];

export {
  PORT,
  HOST,
  ERR_FILE_PATH,
  ALL_LOG_DATA_FILE_PATH,
  LOG_LEVEL,
  LOG_LEVEL_NAME,
};
