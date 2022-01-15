import { getConnection } from 'typeorm';
import UserEntity from '../../db/entities/user.entity';
import { UserModel } from './user.types';

/**
 * Returns all users stored in the database
 *
 *  @returns Array of users. Each user is an object with type {@link UserEntity}
 */
async function getAllUsers() {
  return getConnection().getRepository(UserEntity).find();
}

/**
 * Returns a user with given ID stored in the database
 *
 * @param id - id of the target user
 * @returns Object with the type {@link UserEntity} that has specified ID. If there isn't a user with given ID in the database, the method returns undefined
 */
async function getOneUser(id: string) {
  return getConnection().getRepository(UserEntity).findOne({ where: { id } });
}

/**
 * Adds a user to the database
 *
 * @param user - object that has the type {@link UserModel}
 */
async function addUser(user: UserModel) {
  await getConnection()
    .createQueryBuilder()
    .insert()
    .into(UserEntity)
    .values([user])
    .execute();
}

/**
 * Updates a user stored in the database
 *
 * @param id - id of the target user
 * @param newProperties - object that contains properties that should be updated in the user
 * @returns Updated user, object with the type {@link UserEntity} that has specified ID. If there isn't a user with given ID in the database, the method returns undefined
 */
async function updateUser(id: string, newProperties: Partial<UserModel>) {
  await getConnection()
    .createQueryBuilder()
    .update(UserEntity)
    .set(newProperties)
    .where('id = :id', { id })
    .execute();

  return getOneUser(id);
}

/**
 * Deletes a user with specified ID from the database
 *
 * @param id - id of the target user
 */
async function deleteUser(id: string) {
  await getConnection()
    .createQueryBuilder()
    .delete()
    .from(UserEntity)
    .where('id = :id', { id })
    .execute();
}

export { getAllUsers, getOneUser, addUser, updateUser, deleteUser };
