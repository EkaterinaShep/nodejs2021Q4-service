import * as db from '../../db/db.mjs';

function getAllUsers() {
  return db.getAll('users');
}

function getOneUser(id) {
  return db.findOne('users', id, 'id');
}

function addUser(user) {
  db.addItem('users', user);
}

function updateUser(id, newProperties) {
  return db.findAndUpdate('users', id, 'id', newProperties);
}

function deleteUser(id) {
  db.deleteOne('users', id, 'id');
}

export { getAllUsers, getOneUser, addUser, updateUser, deleteUser };
