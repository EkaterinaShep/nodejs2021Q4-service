import { FastifyPluginCallback } from 'fastify';
import * as boardController from './board.controller';
import { boardSchema } from './board.schema';

const boardRoutes: FastifyPluginCallback = (server, _opts, done) => {
  server.get('/boards', boardController.getAllBoards);

  server.get(
    '/boards/:boardId',
    { schema: { params: boardSchema.params, response: boardSchema.response } },
    boardController.getOneBoard
  );

  server.post(
    '/boards',
    { schema: { body: boardSchema.body, response: boardSchema.response } },
    boardController.addBoard
  );

  server.put(
    '/boards/:boardId',
    {
      schema: {
        body: boardSchema.body,
        params: boardSchema.params,
        response: boardSchema.response,
      },
    },
    boardController.updateBoard
  );

  server.delete(
    '/boards/:boardId',
    { schema: { params: boardSchema.params } },
    boardController.deleteBoard
  );

  done();
};

export { boardRoutes };
