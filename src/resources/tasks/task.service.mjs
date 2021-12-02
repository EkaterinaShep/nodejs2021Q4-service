import { randomUUID } from 'crypto';
import * as taskRepo from './task.repository.mjs';

function getAllTasks(boardId) {
  return taskRepo.getAllTasks(boardId);
}

function getOneTask(id) {
  return taskRepo.getOneTask(id);
}

function addTask(parsedReqBody, boardId) {
  const task = Object.assign({ id: randomUUID() }, parsedReqBody, { boardId });

  taskRepo.addTask(task);

  return task;
}

function updateTask(id, newProperties) {
  const updatedTask = taskRepo.updateTask(id, newProperties);

  return updatedTask;
}

function deleteTask(id) {
  taskRepo.deleteTask(id);
}

export { getAllTasks, getOneTask, addTask, updateTask, deleteTask };
