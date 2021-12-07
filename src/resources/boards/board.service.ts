import { randomUUID } from 'crypto';
import * as boardRepo from './board.repository';
import * as taskRepo from '../tasks/task.repository';

function getAllBoards() {
  return boardRepo.getAllBoards();
}

function getOneBoard(id) {
  return boardRepo.getOneBoard(id);
}

function addBoard(parsedReqBody) {
  const board = {id: randomUUID(), ...parsedReqBody};

  boardRepo.addBoard(board);

  return board;
}

function updateBoard(id, newProperties) {
  const updatedBoard = boardRepo.updateBoard(id, newProperties);

  return updatedBoard;
}

function deleteBoard(id) {
  boardRepo.deleteBoard(id);

  taskRepo.deleteTasks(id);
}

export { getAllBoards, getOneBoard, addBoard, updateBoard, deleteBoard };
