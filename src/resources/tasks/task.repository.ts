import * as db from '../../db/db';
import { TaskModel } from './task.types';

/**
 * Returns all tasks of a board with specified ID stored in the database
 *
 * @param boardId - id of the target board
 * @returns Array of tasks. Each task is an object with type {@link TaskModel}
 */
function getAllTasks(boardId: string) {
  return db.getAll('tasks', boardId, 'boardId');
}

/**
 * Returns a task with given ID stored in the database
 *
 * @param id - id of the target task
 * @returns Object with the type {@link TaskModel} that has specified ID. If there isn't a task with given ID in the database, the method returns undefined
 */
function getOneTask(id: string) {
  return db.findOne('tasks', id, 'id');
}

/**
 * Adds a task to the database
 *
 * @param task - object that has the type {@link TaskModel}
 */
function addTask(task: TaskModel) {
  db.addItem('tasks', task);
}

/**
 * Updates a task stored in the database
 *
 * @param id - id of the target task
 * @param newProperties - object that contains properties that should be updated in the target task
 * @returns Updated task, object with the type {@link TaskModel} that has specified ID. If there isn't a task with given ID in the database, the method returns undefined
 */
function updateTask(id: string, newProperties: Partial<TaskModel>) {
  return db.findAndUpdate('tasks', id, 'id', newProperties);
}

/**
 * Deletes a task with specified ID from the database
 *
 * @param id - id of the target task
 */
function deleteTask(id: string) {
  db.deleteOne('tasks', id, 'id');
}

/**
 * Deletes all tasks of a board with specified ID from the database
 *
 * @param boardId - id of the target board
 */
function deleteTasks(boardId: string) {
  db.deleteMany('tasks', boardId, 'boardId');
}

/**
 * Updates all task stored in the database whose userId field has specified value
 *
 * @param userId - id of the target user
 * @param newIdProp - object with userId field. Value of the field should be null
 */
function updateTasks(userId: string, newIdProp: { userId: null }) {
  db.findAndUpdateMany('tasks', userId, 'userId', newIdProp);
}

export {
  getAllTasks,
  getOneTask,
  addTask,
  updateTask,
  deleteTask,
  deleteTasks,
  updateTasks,
};
