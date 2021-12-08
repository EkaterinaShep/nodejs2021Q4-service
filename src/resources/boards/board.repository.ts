import * as db from '../../db/db';
import { BoardModel } from './board.types';

function getAllBoards() {
  return db.getAll('boards');
}

function getOneBoard(id: string) {
  return db.findOne('boards', id, 'id');
}

function addBoard(board: BoardModel) {
  db.addItem('boards', board);
}

function updateBoard(id: string, newProperties: Partial<BoardModel>) {
  return db.findAndUpdate('boards', id, 'id', newProperties);
}

function deleteBoard(id: string) {
  db.deleteOne('boards', id, 'id');
}

export { getAllBoards, getOneBoard, addBoard, updateBoard, deleteBoard };
