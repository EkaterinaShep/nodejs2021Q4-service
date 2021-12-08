import * as db from '../../db/db';
import { Board } from './board.types';

function getAllBoards() {
  return db.getAll('boards');
}

function getOneBoard(id: Pick<Board, 'id'>) {
  return db.findOne('boards', id, 'id');
}

function addBoard(board: Board) {
  db.addItem('boards', board);
}

function updateBoard(id: Pick<Board, 'id'>, newProperties: Partial<Board>) {
  return db.findAndUpdate('boards', id, 'id', newProperties);
}

function deleteBoard(id: Pick<Board, 'id'>) {
  db.deleteOne('boards', id, 'id');
}

export { getAllBoards, getOneBoard, addBoard, updateBoard, deleteBoard };
