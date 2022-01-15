import { FastifyReply } from 'fastify';
import * as taskService from './task.service';
import { codes } from '../../constants/constants';
import {
  TaskDeleteReq,
  TaskGetAllReq,
  TaskGetByIdReq,
  TaskPostReq,
  TaskPutReq,
} from './task.types';

/**
 * Replies on a get request setting the status code to 200 and sending all tasks of a board with given ID. Tasks is received from a task service
 *
 * @param req - Fastify Request object with type {@link TaskGetAllReq}
 * @param reply - Fastify Reply object
 */
async function getAllTasks(req: TaskGetAllReq, reply: FastifyReply) {
  const { boardId } = req.params;

  const tasks = await taskService.getAllTasks(boardId);

  reply.send(tasks);
}

/**
 * Replies on a get request setting the status code to 200 and sending one task received from a task service
 *
 * @param req - Fastify Request object with type {@link TaskGetByIdReq}
 * @param reply - Fastify Reply object
 */
async function getOneTask(req: TaskGetByIdReq, reply: FastifyReply) {
  const id = req.params.taskId;

  const task = await taskService.getOneTask(id);

  reply.send(task);
}

/**
 * Sends received from post request body and boardId to a task service. Replies on the request setting the status code to 201 and sending one task added to the database and received from the task service
 *
 * @param req - Fastify Request object with type {@link TaskPostReq}
 * @param reply - Fastify Reply object
 */
async function addTask(req: TaskPostReq, reply: FastifyReply) {
  const parsedReqBody = req.body;

  const { boardId } = req.params;

  const task = await taskService.addTask(parsedReqBody, boardId);

  reply.code(codes.created).send(task);
}

/**
 * Sends received from put request body and taskId to a task service for updating of a task. Replies on the request setting the status code to 200 and sending updated task received from the task service
 *
 * @param req - Fastify Request object with type {@link TaskPutReq}
 * @param reply - Fastify Reply object
 */
async function updateTask(req: TaskPutReq, reply: FastifyReply) {
  const id = req.params.taskId;

  const parsedReqBody = req.body;

  const updatedTask = await taskService.updateTask(id, parsedReqBody);

  reply.send(updatedTask);
}

/**
 * Sends received from delete request taskId to a task service for deletion the target task from the database. Replies on the request setting the status code to 204
 *
 * @param req - Fastify Request object with type {@link TaskDeleteReq}
 * @param reply - Fastify Reply object
 */
async function deleteTask(req: TaskDeleteReq, reply: FastifyReply) {
  const id = req.params.taskId;

  await taskService.deleteTask(id);

  reply.code(codes.noContent).send();
}

export { getAllTasks, getOneTask, addTask, updateTask, deleteTask };
