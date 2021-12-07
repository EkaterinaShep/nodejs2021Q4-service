import Fastify from 'fastify';

function createServer() {
  return Fastify({ logger: { level: 'error' } });
}

export { createServer };
