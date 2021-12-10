import Fastify from 'fastify';

/**
 * Creates Fastify server
 *
 * @returns Fastify server instances with the internal logger set to the "error" level
 */
function createServer() {
  return Fastify({ logger: { level: 'error' } });
}

export { createServer };
