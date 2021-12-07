import { User } from './user.model';
import * as userRepo from './user.repository';
import * as taskRepo from '../tasks/task.repository';

function getAllUsers() {
  return userRepo.getAllUsers();
}

function getOneUser(id) {
  return userRepo.getOneUser(id);
}

function addUser(parsedReqBody) {
  const user = new User(parsedReqBody);

  userRepo.addUser(user);

  return User.getResponse(user);
}

function updateUser(id, newProperties) {
  const updatedUser = userRepo.updateUser(id, newProperties);

  return User.getResponse(updatedUser);
}

function deleteUser(id) {
  userRepo.deleteUser(id);

  taskRepo.updateTasks(id, { userId: null });
}

export { getAllUsers, getOneUser, addUser, updateUser, deleteUser };
