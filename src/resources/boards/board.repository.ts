import { getConnection } from 'typeorm';
import { BoardEntity } from '../../db/entities/board.entity';
import { BoardModel } from './board.types';

/**
 * Returns all board items stored in the database
 *
 * @returns Array of boards. Each board is an object with type {@link BoardEntity}
 */
async function getAllBoards() {
  const boardRepo = getConnection().getRepository(BoardEntity);

  return boardRepo.find({ relations: ['columns'] });
}

/**
 * Returns a board item with given ID stored in the database
 *
 * @param id - id of the target board item
 *
 * @returns Object with the type {@link BoardEntity} that has specified ID. If there isn't a board item with given ID in the database, the method returns undefined
 */
async function getOneBoard(id: string) {
  const boardRepo = getConnection().getRepository(BoardEntity);

  return boardRepo.findOne({ where: { id }, relations: ['columns'] });
}

/**
 * Adds a board item to the database
 *
 * @param board - object that has the type {@link BoardModel}
 */
async function addBoard(board: BoardModel) {
  await getConnection()
    .createQueryBuilder()
    .insert()
    .into(BoardEntity)
    .values([board as unknown as BoardEntity])
    .execute();
}

/**
 * Updates a board item stored in the database
 *
 * @param id - id of the target board item
 * @param newProperties - object that contains properties that should be updated in the board item
 *
 * @returns Updated board item, object with the type {@link BoardEntity} that has specified ID. If there isn't a board item with given ID in the database, the method returns undefined
 */
async function updateBoard(id: string, newProperties: Partial<BoardModel>) {
  const board = await getOneBoard(id);

  Object.assign(board, newProperties);

  await board?.save();

  return board;
}

/**
 * Deletes a board item with specified ID from the database
 *
 * @param id - id of the target board item
 */
async function deleteBoard(id: string) {
  await getConnection()
    .createQueryBuilder()
    .delete()
    .from(BoardEntity)
    .where('id = :id', { id })
    .execute();
}

export { getAllBoards, getOneBoard, addBoard, updateBoard, deleteBoard };
