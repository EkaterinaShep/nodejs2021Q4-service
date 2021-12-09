import * as db from '../../db/db';
import { UserModel } from './user.types';

function getAllUsers() {
  return db.getAll('users');
}

function getOneUser(id: string) {
  return db.findOne('users', id, 'id');
}

function addUser(user: UserModel) {
  db.addItem('users', user);
}

function updateUser(id: string, newProperties: Partial<UserModel>) {
  return db.findAndUpdate('users', id, 'id', newProperties);
}

function deleteUser(id: string) {
  db.deleteOne('users', id, 'id');
}

export { getAllUsers, getOneUser, addUser, updateUser, deleteUser };
