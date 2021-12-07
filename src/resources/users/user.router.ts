import * as userController from './user.controller';

const userRoutes = (server, opts, done) => {
  server.get('/users', userController.getAllUsers);
  server.get('/users/:userId', userController.getOneUser);
  server.post('/users', userController.addUser);
  server.put('/users/:userId', userController.updateUser);
  server.delete('/users/:userId', userController.deleteUser);

  done();
};

export { userRoutes };
