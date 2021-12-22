import { createServer, listenServer } from './server/index';
import { PORT, HOST } from './config/config';
import { userRoutes } from './resources/users/user.router';
import { boardRoutes } from './resources/boards/board.router';
import { taskRoutes } from './resources/tasks/task.router';
import { loggerOpts } from './logging';

const server = createServer(loggerOpts);

server.register(userRoutes);
server.register(boardRoutes);
server.register(taskRoutes);

listenServer(server, PORT, HOST);
