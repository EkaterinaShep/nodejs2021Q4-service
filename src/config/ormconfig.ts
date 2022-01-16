import process from 'process';
import dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';

dotenv.config();

const connectionOptions = {
  type: 'postgres',
  host: process.env['POSTGRES_HOST'] || 'postgres',
  port: process.env['POSTGRES_PORT'] || 5432,
  username: process.env['POSTGRES_USER'] || 'postgres',
  password: process.env['POSTGRES_PASSWORD'] || 'postgres',
  database: process.env['POSTGRES_DB'] || 'postgres',
  synchronize: false,
  migrationsRun: true,
  entities: [process.env['TYPEORM_ENTITIES']] || ['./build/**/*.entity.js'],
  migrations: [process.env['TYPEORM_MIGRATIONS']] || [
    './build/db/migrations/*.js',
  ],
  cli: {
    migrationsDir:
      process.env['TYPEORM_MIGRATIONS_DIR'] || './src/db/migrations',
  },
} as ConnectionOptions;

export default connectionOptions;
