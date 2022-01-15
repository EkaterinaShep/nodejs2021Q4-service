import { FastifyInstance } from 'fastify';
import { logAppError } from '../logging';
import { CustomError } from './custom-errors/custom-error';

function setErrorHandler(server: FastifyInstance) {
  server.setErrorHandler((err, _req, reply) => {
    if (err instanceof CustomError) {
      reply.status(err.statusCode).send({ [err.name]: err.message });
    } else {
      reply.send(err);
    }

    console.log(err);

    logAppError(server, err, reply);
  });
}

export { setErrorHandler };
