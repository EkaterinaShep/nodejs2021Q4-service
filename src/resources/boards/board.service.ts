import { randomUUID } from 'crypto';
import * as boardRepo from './board.repository';
import * as taskRepo from '../tasks/task.repository';
import { BoardBody } from './board.types';
import { NotFoundError } from '../../errors/custom-errors/not-found-error';
import { BoardEntity } from '../../db/entities/board.entity';

/**
 * Returns all board items received from a board repository
 *
 * @returns Array of boards received from the board repository. Each board is an object with type {@link BoardModel}
 */
async function getAllBoards() {
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
async function getOneBoard(id: string) {
  const board = await boardRepo.getOneBoard(id);

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
async function addBoard(reqBody: BoardBody) {
  const board = { id: randomUUID(), ...reqBody };

  await boardRepo.addBoard(board as unknown as BoardEntity);

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
async function updateBoard(id: string, newProperties: BoardBody) {
  const updatedBoard = await boardRepo.updateBoard(
    id,
    newProperties as unknown as Partial<BoardEntity>
  );
  console.log(updatedBoard);

  return updatedBoard;
}

/**
 * Sends request to a board repository for deletion board item with specified ID from the database and sends request to a task repository for deletion all board tasks
 *
 * @param id - id of the target board item
 */
async function deleteBoard(id: string) {
  await boardRepo.deleteBoard(id);

  await taskRepo.deleteTasks(id);
}

export { getAllBoards, getOneBoard, addBoard, updateBoard, deleteBoard };
