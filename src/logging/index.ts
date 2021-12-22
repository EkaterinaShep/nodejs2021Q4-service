import { FastifyLoggerOptions } from 'fastify';

const loggerOpts = {
  logger: true,
  disableRequestLogging: true,
} as FastifyLoggerOptions;

export { loggerOpts };
