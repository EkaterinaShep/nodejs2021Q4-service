import * as db from '../../db/db.mjs';

function getAllUsers() {
  return db.getAll();
}

function getOneUser(id) {
  return db.findOne(id, 'id');
}

function addUser(user) {
  db.addItem(user);
}

function updateUser(id, newProperties) {
  return db.findAndUpdate(id, 'id', newProperties);
}

function deleteUser(id) {
  db.deleteOne(id, 'id');
}

export { getAllUsers, getOneUser, addUser, updateUser, deleteUser };
