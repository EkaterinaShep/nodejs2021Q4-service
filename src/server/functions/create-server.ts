import Fastify, { FastifyLoggerOptions } from 'fastify';

/**
 * Creates Fastify server
 *
 * @param loggerOpts - logger options
 *
 * @returns Fastify server instance with the internal logger
 */
function createServer(loggerOpts: FastifyLoggerOptions) {
  return Fastify(loggerOpts);
}

export { createServer };
