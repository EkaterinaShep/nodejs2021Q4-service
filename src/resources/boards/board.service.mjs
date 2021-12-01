import { randomUUID } from 'crypto';
import * as boardRepo from './board.repository.mjs';

function getAllBoards() {
  return boardRepo.getAllBoards();
}

function getOneBoard(id) {
  return boardRepo.getOneBoard(id);
}

function addBoard(parsedReqBody) {
  const board = Object.assign({ id: randomUUID() }, parsedReqBody);

  boardRepo.addBoard(board);

  return board;
}

function updateBoard(id, newProperties) {
  const updatedBoard = boardRepo.updateBoard(id, newProperties);

  return updatedBoard;
}

function deleteBoard(id) {
  boardRepo.deleteBoard(id);
}

export { getAllBoards, getOneBoard, addBoard, updateBoard, deleteBoard };
