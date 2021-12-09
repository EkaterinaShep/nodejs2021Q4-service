import { randomUUID } from 'crypto';
import * as userRepo from './user.repository';
import * as taskRepo from '../tasks/task.repository';
import { UserBody } from './user.types';

function getAllUsers() {
  return userRepo.getAllUsers();
}

function getOneUser(id: string) {
  return userRepo.getOneUser(id);
}

function addUser(parsedReqBody: UserBody) {
  const user = { id: randomUUID(), ...parsedReqBody };

  userRepo.addUser(user);

  return user;
}

function updateUser(id: string, newProperties: UserBody) {
  return userRepo.updateUser(id, newProperties);
}

function deleteUser(id: string) {
  userRepo.deleteUser(id);

  taskRepo.updateTasks(id, { userId: null });
}

export { getAllUsers, getOneUser, addUser, updateUser, deleteUser };
