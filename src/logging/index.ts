import {
  FastifyError,
  FastifyInstance,
  FastifyLoggerOptions,
  FastifyReply,
} from 'fastify';

/* ----------------------------- Logger options ----------------------------- */
const loggerOpts = {
  logger: {
    level: 'trace',
    file: 'all-data.log',
    prettyPrint: {
      colorize: false,
      ignore: 'pid,hostname,reqId',
      singleLine: true,
      translateTime: 'SYS:standard',
      suppressFlushSyncWarning: true,
    },
  },
  disableRequestLogging: true,
} as FastifyLoggerOptions;

/* ---------------------------- Logging functions --------------------------- */
function addReqLogging(server: FastifyInstance) {
  server.addHook('preHandler', (req, _reply, done) => {
    const { method, url, params, body, query } = req;
    req.log.info(
      `Received ${method} request to ${url} with params: ${JSON.stringify(
        params
      )}, query: ${JSON.stringify(query)}, body: ${JSON.stringify(body)} `
    );

    done();
  });
}

function addResponseLogging(server: FastifyInstance) {
  server.addHook('onResponse', (_req, reply, done) => {
    const { statusCode } = reply;

    reply.log.info(`Request completed with ${statusCode} status code`);

    done();
  });
}

function logFatalError(server: FastifyInstance, err: Error) {
  server.log.fatal(`${err.name}: ${err.message}`);
}

function logAppError(
  server: FastifyInstance,
  err: FastifyError,
  reply: FastifyReply
) {
  const statusCode = reply.statusCode;

  if (statusCode >= 400 && statusCode < 500) {
    server.log.info(`${err.name}: ${err.message}`);
    return;
  }

  server.log.error(`${err.name}: ${err.message}`);
}

export {
  loggerOpts,
  addReqLogging,
  addResponseLogging,
  logFatalError,
  logAppError,
};
