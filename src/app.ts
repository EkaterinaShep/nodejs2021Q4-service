import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { createServer, listenServer } from './server/index';
import { PORT, HOST, connectionOptions } from './config/config';
import { userRoutes } from './resources/users/user.router';
import { boardRoutes } from './resources/boards/board.router';
import { taskRoutes } from './resources/tasks/task.router';
import { addReqLogging, addResponseLogging, loggerOpts } from './logging';
import { setErrorHandler } from './errors/set-error-handler';
import { handleUncaughtExceptions } from './errors/handle-uncaught-exceptions';
import { handleUnhandledRejection } from './errors/handle-unhandled-rejection';
// import { BoardEntity } from './resources/boards/board.entity';

handleUncaughtExceptions();
handleUnhandledRejection();
const server = createServer(loggerOpts);

addReqLogging(server);
addResponseLogging(server);

server.register(userRoutes);
server.register(boardRoutes);
server.register(taskRoutes);

setErrorHandler(server);

createConnection(connectionOptions)
  .then(() => {
    listenServer(server, PORT, HOST);
  })
  .catch((err) => console.error(err));
