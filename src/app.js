import { createServer, listenServer } from './server/index.mjs';
import { PORT, HOST } from './config/config.mjs';
import { userRoutes } from './resources/users/user.router.mjs';
import { boardRoutes } from './resources/boards/board.router.mjs';
import { taskRoutes } from './resources/tasks/task.router.mjs';

const server = createServer();

server.register(userRoutes);
server.register(boardRoutes);
server.register(taskRoutes);

listenServer({ server, PORT, HOST });
