import * as db from '../../db/db';
import { BoardModel } from './board.types';

/**
 * Returns all board items stored in the database
 *
 * @returns Array of boards. Each board is an object with type {@link BoardModel}
 */
function getAllBoards() {
  return db.getAll('boards');
}

/**
 * Returns a board item with given ID stored in the database
 *
 * @param id - id of the target board item
 *
 * @returns Object with the type {@link BoardModel} that has specified ID. If there isn't a board item with given ID in the database, the method returns undefined
 */
function getOneBoard(id: string) {
  return db.findOne('boards', id, 'id');
}

/**
 * Adds a board item to the database
 *
 * @param board - object that has the type {@link BoardModel}
 */
function addBoard(board: BoardModel) {
  db.addItem('boards', board);
}

/**
 * Updates a board item stored in the database
 *
 * @param id - id of the target board item
 * @param newProperties - object that contains properties that should be updated in the board item
 *
 * @returns Updated board item, object with the type {@link BoardModel} that has specified ID. If there isn't a board item with given ID in the database, the method returns undefined
 */
function updateBoard(id: string, newProperties: Partial<BoardModel>) {
  return db.findAndUpdate('boards', id, 'id', newProperties);
}

/**
 * Deletes a board item with specified ID from the database
 *
 * @param id - id of the target board item
 */
function deleteBoard(id: string) {
  db.deleteOne('boards', id, 'id');
}

export { getAllBoards, getOneBoard, addBoard, updateBoard, deleteBoard };
