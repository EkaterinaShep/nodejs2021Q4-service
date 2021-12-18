import * as db from '../../db/db';
import { UserModel } from './user.types';

/**
 * Returns all users stored in the database
 *
 *  @returns Array of users. Each user is an object with type {@link UserModel}
 */
function getAllUsers() {
  return db.getAll('users');
}

/**
 * Returns a user with given ID stored in the database
 *
 * @param id - id of the target user
 * @returns Object with the type {@link UserModel} that has specified ID. If there isn't a user with given ID in the database, the method returns undefined
 */
function getOneUser(id: string) {
  return db.findOne('users', id, 'id');
}

/**
 * Adds a user to the database
 *
 * @param user - object that has the type {@link UserModel}
 */
function addUser(user: UserModel) {
  db.addItem('users', user);
}

/**
 * Updates a user stored in the database
 *
 * @param id - id of the target user
 * @param newProperties - object that contains properties that should be updated in the user
 * @returns Updated user, object with the type {@link UserModel} that has specified ID. If there isn't a user with given ID in the database, the method returns undefined
 */
function updateUser(id: string, newProperties: Partial<UserModel>) {
  return db.findAndUpdate('users', id, 'id', newProperties);
}

/**
 * Deletes a user with specified ID from the database
 *
 * @param id - id of the target user
 */
function deleteUser(id: string) {
  db.deleteOne('users', id, 'id');
}

export { getAllUsers, getOneUser, addUser, updateUser, deleteUser };
