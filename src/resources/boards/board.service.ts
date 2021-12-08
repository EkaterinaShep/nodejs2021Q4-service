import { randomUUID } from 'crypto';
import * as boardRepo from './board.repository';
import * as taskRepo from '../tasks/task.repository';
import { BoardBody } from './board.types';

function getAllBoards() {
  return boardRepo.getAllBoards();
}

function getOneBoard(id: string) {
  return boardRepo.getOneBoard(id);
}

function addBoard(reqBody: BoardBody) {
  const board = { id: randomUUID(), ...reqBody };

  boardRepo.addBoard(board);

  return board;
}

function updateBoard(id: string, newProperties: BoardBody) {
  const updatedBoard = boardRepo.updateBoard(id, newProperties);

  return updatedBoard;
}

function deleteBoard(id: string) {
  boardRepo.deleteBoard(id);

  taskRepo.deleteTasks(id);
}

export { getAllBoards, getOneBoard, addBoard, updateBoard, deleteBoard };
