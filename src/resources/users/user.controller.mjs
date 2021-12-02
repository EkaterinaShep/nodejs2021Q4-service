import * as userService from './user.service.mjs';
import { codes } from '../../constants/constants.mjs';

function getAllUsers(req, reply) {
  const users = userService.getAllUsers();

  reply.send(users);
}

function getOneUser(req, reply) {
  const id = req.params.userId;

  const user = userService.getOneUser(id);

  reply.send(user);
}

function addUser(req, reply) {
  const parsedReqBody = req.body;

  const user = userService.addUser(parsedReqBody);

  reply.code(codes.created).send(user);
}

function updateUser(req, reply) {
  const id = req.params.userId;
  const parsedReqBody = req.body;

  const updatedUser = userService.updateUser(id, parsedReqBody);

  reply.send(updatedUser);
}

function deleteUser(req, reply) {
  const id = req.params.userId;

  userService.deleteUser(id);

  reply.code(codes.noContent).send();
}

export { getAllUsers, getOneUser, addUser, updateUser, deleteUser };
