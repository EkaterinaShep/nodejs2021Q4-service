import { createServer, listenServer } from './server/index.mjs';
import { PORT, HOST } from './config/config.mjs';
import { userRoutes } from './resources/users/user.router.mjs';

const server = createServer();

server.register(userRoutes);

listenServer({ server, PORT, HOST });
