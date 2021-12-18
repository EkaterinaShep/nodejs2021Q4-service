import { randomUUID } from 'crypto';
import * as taskRepo from './task.repository';
import { TaskBody, TaskModel } from './task.types';

/**
 * Returns all tasks of a board with given ID. Tasks are received from a task repository
 *
 * @param boardId - id of the target board item
 * @returns Array of tasks received from the task repository. Each task is an object with type {@link TaskModel}
 */
function getAllTasks(boardId: string) {
  return taskRepo.getAllTasks(boardId);
}

/**
 * Returns a task with given ID received from a task repository
 *
 * @param id - id of the target task item
 * @returns Object with the type {@link TaskModel} that has specified ID. If there isn't a task with given ID, the method returns undefined
 */
function getOneTask(id: string) {
  return taskRepo.getOneTask(id);
}

/**
 * Adds ID to a task, returns modified task and sends it to a task repository for further adding to the database
 *
 * @param parsedReqBody - object received via request. It contains all necessary properties for adding to the database except for ID
 * @param boardId - id of a board to which the task must be added
 * @returns Task item
 */
function addTask(parsedReqBody: TaskBody, boardId: string) {
  const task: TaskModel = { id: randomUUID(), ...parsedReqBody, boardId };

  taskRepo.addTask(task);

  return task;
}

/**
 * Returns updated task received from a task repository
 *
 * @param id - id of the target task
 * @param newProperties - object that contains properties that should be updated in the task with specified ID
 * @returns Updated task, object with the type {@link TaskModel} received from the task repository
 */
function updateTask(id: string, newProperties: TaskBody) {
  const updatedTask = taskRepo.updateTask(id, newProperties);

  return updatedTask;
}

/**
 * Sends request to a task repository for removal a task with specified ID from the database
 *
 * @param id - id of the target task
 */
function deleteTask(id: string) {
  taskRepo.deleteTask(id);
}

export { getAllTasks, getOneTask, addTask, updateTask, deleteTask };
