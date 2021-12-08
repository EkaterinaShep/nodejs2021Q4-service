import { FastifyInstance } from 'fastify';

interface ServerOpts {
  server: FastifyInstance;
  PORT: string | number;
  HOST: string;
}

export { ServerOpts };
