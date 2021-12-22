import { FastifyPluginCallback } from 'fastify';
import * as taskController from './task.controller';
import { taskParamsWithoutTaskIdSchema, taskSchema } from './task.schema';

/**
 * Creates a set of routes for Task endpoint
 *
 * @param server - Fastify server instance
 * @param _opts - object of options
 * @param done - done callback
 */
const taskRoutes: FastifyPluginCallback = (server, _opts, done) => {
  server.get(
    '/boards/:boardId/tasks',
    { schema: { params: taskParamsWithoutTaskIdSchema } },
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
        params: taskParamsWithoutTaskIdSchema,
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
