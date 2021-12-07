import * as db from '../../db/db';

function getAllBoards() {
  return db.getAll('boards');
}

function getOneBoard(id) {
  return db.findOne('boards', id, 'id');
}

function addBoard(board) {
  db.addItem('boards', board);
}

function updateBoard(id, newProperties) {
  return db.findAndUpdate('boards', id, 'id', newProperties);
}

function deleteBoard(id) {
  db.deleteOne('boards', id, 'id');
}

export { getAllBoards, getOneBoard, addBoard, updateBoard, deleteBoard };
