import { randomUUID } from 'crypto';
import * as userRepo from './user.repository';
import * as taskRepo from '../tasks/task.repository';
import { UserBody } from './user.types';

/**
 * Returns all users received from a user repository
 *
 * @returns Array of users received from the user repository
 */
async function getAllUsers() {
  return userRepo.getAllUsers();
}

/**
 *  Returns a user with given ID received from a user repository
 *
 * @param id - id of the target user
 * @returns User item. If there isn't a user with given ID, the method returns undefined
 */
async function getOneUser(id: string) {
  return userRepo.getOneUser(id);
}

/**
 * Adds the ID to the user, returns modified user and sends it to a user repository for further adding to the database
 *
 * @param parsedReqBody - object received via request that contains all necessary properties for adding to the database except for ID
 * @returns User item
 */
async function addUser(parsedReqBody: UserBody) {
  const user = { id: randomUUID(), ...parsedReqBody };

  await userRepo.addUser(user);

  return user;
}

/**
 * Returns updated user received from a user repository
 *
 * @param id - id of the target user
 * @param newProperties - object that contains properties that should be updated in the user with specified ID
 * @returns Updated user received from the user repository
 */
async function updateUser(id: string, newProperties: UserBody) {
  return userRepo.updateUser(id, newProperties);
}

/**
 * Sends request to a user repository for deletion user with specified ID from the database. Sends request to a task repository for change userId field value to null in all tasks that have userId field equal to target user ID
 *
 * @param id - id of the target user
 */
async function deleteUser(id: string) {
  await userRepo.deleteUser(id);

  await taskRepo.updateTasks(id, { userId: null });
}

export { getAllUsers, getOneUser, addUser, updateUser, deleteUser };
