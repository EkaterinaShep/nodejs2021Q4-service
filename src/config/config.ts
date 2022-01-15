import process from 'process';
import dotenv from 'dotenv';
import path from 'path';
import { ConnectionOptions } from 'typeorm';
import { logLevels } from '../constants/constants';

dotenv.config();

const PORT = process.env['PORT'] || 4000;
const HOST = process.env['HOST'] || '0.0.0.0';
const ERR_FILE_PATH = path.resolve(__dirname, '../../logs/err.log');
const ALL_LOG_DATA_FILE_PATH = path.resolve(__dirname, '../../logs/all.log');
const LOG_LEVEL =
  (process.env['LOG_LEVEL'] as unknown as keyof typeof logLevels) || '5';
const LOG_LEVEL_NAME = logLevels[LOG_LEVEL];

const connectionOptions = {
  type: 'postgres',
  host: process.env['POSTGRES_HOST'] || 'postgres',
  port: process.env['POSTGRES_PORT'] || 5432,
  username: process.env['POSTGRES_USER'] || 'postgres',
  password: process.env['POSTGRES_PASSWORD'] || 'postgres',
  database: process.env['POSTGRES_DB'] || 'postgres',
  dropSchema: true,
  synchronize: true,
  entities: [process.env['TYPEORM_ENTITIES']] || ['./build/**/*.entity.js'],
} as ConnectionOptions;

export {
  PORT,
  HOST,
  ERR_FILE_PATH,
  ALL_LOG_DATA_FILE_PATH,
  LOG_LEVEL,
  LOG_LEVEL_NAME,
  connectionOptions,
};
