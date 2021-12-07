import * as db from '../../db/db';

function getAllTasks(boardId) {
  return db.getAll('tasks', boardId, 'boardId');
}

function getOneTask(id) {
  return db.findOne('tasks', id, 'id');
}

function addTask(task) {
  db.addItem('tasks', task);
}

function updateTask(id, newProperties) {
  return db.findAndUpdate('tasks', id, 'id', newProperties);
}

function deleteTask(id) {
  db.deleteOne('tasks', id, 'id');
}

function deleteTasks(boardId) {
  db.deleteMany('tasks', boardId, 'boardId');
}

function updateTasks(userId, newIdProp) {
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
