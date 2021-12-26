import { FastifyInstance } from 'fastify';
import { logFatalError } from '../../logging';

/**
 * Starts the server on the given port and host
 *
 * @param server - Fastify instance server
 * @param port - custom port value
 * @param host - custom host value
 */
function listenServer(
  server: FastifyInstance,
  port: string | number,
  host: string
) {
  server.listen(port, host, (err, address) => {
    if (err) {
      logFatalError(server, err);
      process.exit(1);
    }

    console.log(`Server running at ${address}`);
  });
}

export { listenServer };
