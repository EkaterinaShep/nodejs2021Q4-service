import { FastifyPluginCallback } from 'fastify';
import * as userController from './user.controller';
import { userSchema } from './user.schema';

const userRoutes: FastifyPluginCallback = (server, _opts, done) => {
  server.get('/users', userController.getAllUsers);

  server.get(
    '/users/:userId',
    { schema: { params: userSchema.params, response: userSchema.response } },
    userController.getOneUser
  );

  server.post(
    '/users',
    { schema: { body: userSchema.body, response: userSchema.response } },
    userController.addUser
  );

  server.put(
    '/users/:userId',
    {
      schema: {
        body: userSchema.body,
        params: userSchema.params,
        response: userSchema.response,
      },
    },
    userController.updateUser
  );

  server.delete(
    '/users/:userId',
    { schema: { params: userSchema.params } },
    userController.deleteUser
  );

  done();
};

export { userRoutes };
