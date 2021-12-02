import * as boardController from './board.controller.mjs';
import { boardSchema } from './board.schema.mjs';

const boardRoutes = (server, opts, done) => {
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
