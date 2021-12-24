import fs from 'fs';
import {
  FastifyError,
  FastifyInstance,
  FastifyLoggerOptions,
  FastifyReply,
} from 'fastify';
import {
  ALL_LOG_DATA_FILE_PATH,
  ERR_FILE_PATH,
  LOG_LEVEL,
  LOG_LEVEL_NAME,
} from '../config/config';
import { formatDateTime } from '../helpers/general-js';

/* ----------------------------- Logger options ----------------------------- */
const loggerOpts = {
  logger: {
    level: LOG_LEVEL_NAME,
    file: ALL_LOG_DATA_FILE_PATH,
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
  const message = `${err.name}: ${err.message}`;

  server.log.fatal(message);
  logErrToErrFileAsync(`[${formatDateTime(new Date())}]: FATAL: ${message}\n`);
}

function logAppError(
  server: FastifyInstance,
  err: FastifyError,
  reply: FastifyReply
) {
  const statusCode = reply.statusCode;
  const message = `${err.name}: ${err.message}`;

  if (statusCode >= 400 && statusCode < 500) {
    server.log.info(message);

    return;
  }

  server.log.error(message);

  if (Number(LOG_LEVEL) !== 0) {
    logErrToErrFileAsync(
      `[${formatDateTime(new Date())}]: ERROR: ${message}\n`
    );
  }
}

function logErrToErrFileSync(content: string) {
  if (Number(LOG_LEVEL) !== 0) {
    fs.writeFileSync(ERR_FILE_PATH, content, {
      flag: 'a',
    });
  }
}

function logErrToErrFileAsync(content: string) {
  const stream = fs.createWriteStream(ERR_FILE_PATH, { flags: 'a' });

  stream.write(content);
  stream.end();
}

export {
  loggerOpts,
  addReqLogging,
  addResponseLogging,
  logFatalError,
  logAppError,
  logErrToErrFileSync,
};
