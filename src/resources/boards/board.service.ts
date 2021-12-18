import { randomUUID } from 'crypto';
import * as boardRepo from './board.repository';
import * as taskRepo from '../tasks/task.repository';
import { BoardBody } from './board.types';

/**
 * Returns all board items received from board repository
 *
 * @returns Array of boards received from board repository. Each board is an object with type {@link BoardModel}
 */
function getAllBoards() {
  return boardRepo.getAllBoards();
}

/**
 * Returns a board item with given ID received from board repository
 *
 * @param id - id of the target board item
 *
 * @returns Object with the type {@link BoardModel} that has specified ID. If there isn't a board item with given ID, the method returns undefined
 */
function getOneBoard(id: string) {
  return boardRepo.getOneBoard(id);
}

/**
 * Adds the ID to the board item, returns modified item and sends it to board repository for further adding to the database
 *
 * @param reqBody - object received via request that contains all necessary properties for adding to the database except for ID
 *
 * @returns Board item
 */
function addBoard(reqBody: BoardBody) {
  const board = { id: randomUUID(), ...reqBody };

  boardRepo.addBoard(board);

  return board;
}

/**
 * Returns updated board item received from board repository
 *
 * @param id - id of the target board item
 * @param newProperties - object that contains properties that should be updated in the board item with specified ID
 *
 * @returns Updated board item, object with the type {@link BoardModel} received from board repository
 */
function updateBoard(id: string, newProperties: BoardBody) {
  const updatedBoard = boardRepo.updateBoard(id, newProperties);

  return updatedBoard;
}

/**
 * Sends request to board repository for removal board item with specified ID from the database and sends request to task repository for deletion all board tasks
 *
 * @param id - id of the target board item
 */
function deleteBoard(id: string) {
  boardRepo.deleteBoard(id);

  taskRepo.deleteTasks(id);
}

export { getAllBoards, getOneBoard, addBoard, updateBoard, deleteBoard };
