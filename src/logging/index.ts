import { FastifyInstance, FastifyLoggerOptions } from 'fastify';

const loggerOpts = {
  logger: {
    level: 'info',
    prettyPrint: {
      colorize: false,
      ignore: 'time,pid,hostname,reqId',
      singleLine: true,
    },
  },
  disableRequestLogging: true,
} as FastifyLoggerOptions;

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

export { loggerOpts, addReqLogging };
