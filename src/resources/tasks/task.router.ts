import { FastifyPluginCallback } from 'fastify';
import * as taskController from './task.controller';
import { taskSchema } from './task.schema';

const taskRoutes: FastifyPluginCallback = (server, _opts, done) => {
  server.get(
    '/boards/:boardId/tasks',
    { schema: { params: taskSchema.params } },
    taskController.getAllTasks
  );

  server.get(
    '/boards/:boardId/tasks/:taskId',
    { schema: { params: taskSchema.params, response: taskSchema.response } },
    taskController.getOneTask
  );

  server.post(
    '/boards/:boardId/tasks',
    {
      schema: {
        body: taskSchema.body,
        params: taskSchema.params,
        response: taskSchema.response,
      },
    },
    taskController.addTask
  );

  server.put(
    '/boards/:boardId/tasks/:taskId',
    {
      schema: {
        body: taskSchema.body,
        params: taskSchema.params,
        response: taskSchema.response,
      },
    },
    taskController.updateTask
  );

  server.delete(
    '/boards/:boardId/tasks/:taskId',
    { schema: { params: taskSchema.params } },
    taskController.deleteTask
  );

  done();
};

export { taskRoutes };
