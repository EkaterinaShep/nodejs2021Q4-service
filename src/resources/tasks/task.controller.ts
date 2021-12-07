import * as taskService from './task.service';
import { codes } from '../../constants/constants';

function getAllTasks(req, reply) {
  const { boardId } = req.params;

  const tasks = taskService.getAllTasks(boardId);

  reply.send(tasks);
}

function getOneTask(req, reply) {
  const id = req.params.taskId;

  const task = taskService.getOneTask(id);

  if (!task) {
    reply.code(codes.notFound).send();
  }

  reply.send(task);
}

function addTask(req, reply) {
  const parsedReqBody = req.body;

  const { boardId } = req.params;

  const task = taskService.addTask(parsedReqBody, boardId);

  reply.code(codes.created).send(task);
}

function updateTask(req, reply) {
  const id = req.params.taskId;
  const parsedReqBody = req.body;

  const updatedTask = taskService.updateTask(id, parsedReqBody);

  reply.send(updatedTask);
}

function deleteTask(req, reply) {
  const id = req.params.taskId;

  taskService.deleteTask(id);

  reply.code(codes.noContent).send();
}

export { getAllTasks, getOneTask, addTask, updateTask, deleteTask };
