import { createServer, listenServer } from './server/index';
import { PORT, HOST } from './config/config';
import { userRoutes } from './resources/users/user.router';
import { boardRoutes } from './resources/boards/board.router';
import { taskRoutes } from './resources/tasks/task.router';
import { addReqLogging, addResponseLogging, loggerOpts } from './logging';
import { setErrorHandler } from './errors/set-error-handler';
import { handleUncaughtExceptions } from './errors/handle-uncaught-exceptions';
import { handleUnhandledRejection } from './errors/handle-unhandled-rejection';

handleUncaughtExceptions();
handleUnhandledRejection();
throw Error('Oops!');

const server = createServer(loggerOpts);

addReqLogging(server);
addResponseLogging(server);

server.register(userRoutes);
server.register(boardRoutes);
server.register(taskRoutes);

setErrorHandler(server);

listenServer(server, PORT, HOST);
