import { randomUUID } from 'crypto';
import * as boardRepo from './board.repository';
import * as taskRepo from '../tasks/task.repository';
import { BoardBody } from './board.types';
import { NotFoundError } from '../../errors/custom-errors/not-found-error';

/**
 * Returns all board items received from a board repository
 *
 * @returns Array of boards received from the board repository. Each board is an object with type {@link BoardModel}
 */
function getAllBoards() {
  return boardRepo.getAllBoards();
}

/**
 * Returns a board item with given ID received from a board repository
 *
 * @param id - id of the target board item
 * @returns Object with the type {@link BoardModel} that has specified ID.
 *
 * @throws {@link NotFoundError}
 * Thrown if there isn't a board item with given ID
 */
function getOneBoard(id: string) {
  const board = boardRepo.getOneBoard(id);

  if (!board) {
    throw new NotFoundError(`board with id '${id}' was not found`);
  }

  return board;
}

/**
 * Adds the ID to the board item, returns modified item and sends it to a board repository for further adding to the database
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
 * Returns updated board item received from a board repository
 *
 * @param id - id of the target board item
 * @param newProperties - object that contains properties that should be updated in the board item with specified ID
 *
 * @returns Updated board item, object with the type {@link BoardModel} received from the board repository
 */
function updateBoard(id: string, newProperties: BoardBody) {
  const updatedBoard = boardRepo.updateBoard(id, newProperties);

  return updatedBoard;
}

/**
 * Sends request to a board repository for deletion board item with specified ID from the database and sends request to a task repository for deletion all board tasks
 *
 * @param id - id of the target board item
 */
function deleteBoard(id: string) {
  boardRepo.deleteBoard(id);

  taskRepo.deleteTasks(id);
}

export { getAllBoards, getOneBoard, addBoard, updateBoard, deleteBoard };
