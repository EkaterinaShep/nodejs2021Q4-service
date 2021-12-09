import * as db from '../../db/db';
import { TaskModel } from './task.types';

function getAllTasks(boardId: string) {
  return db.getAll('tasks', boardId, 'boardId');
}

function getOneTask(id: string) {
  return db.findOne('tasks', id, 'id');
}

function addTask(task: TaskModel) {
  db.addItem('tasks', task);
}

function updateTask(id: string, newProperties: Partial<TaskModel>) {
  return db.findAndUpdate('tasks', id, 'id', newProperties);
}

function deleteTask(id: string) {
  db.deleteOne('tasks', id, 'id');
}

function deleteTasks(boardId: string) {
  db.deleteMany('tasks', boardId, 'boardId');
}

function updateTasks(userId: string, newIdProp: {userId: null}) {
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
