import { randomUUID } from 'crypto';
import * as taskRepo from './task.repository';
import { TaskBody, TaskModel } from './task.types';

function getAllTasks(boardId: string) {
  return taskRepo.getAllTasks(boardId);
}

function getOneTask(id: string) {
  return taskRepo.getOneTask(id);
}

function addTask(parsedReqBody: TaskBody, boardId: string) {
  const task: TaskModel = { id: randomUUID(), ...parsedReqBody, boardId };

  taskRepo.addTask(task);

  return task;
}

function updateTask(id: string, newProperties: TaskBody) {
  const updatedTask = taskRepo.updateTask(id, newProperties);

  return updatedTask;
}

function deleteTask(id: string) {
  taskRepo.deleteTask(id);
}

export { getAllTasks, getOneTask, addTask, updateTask, deleteTask };
