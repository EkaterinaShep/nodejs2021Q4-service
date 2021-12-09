import { FastifyReply, FastifyRequest } from 'fastify';
import * as userService from './user.service';
import { codes } from '../../constants/constants';

function getAllUsers(_req: FastifyRequest, reply: FastifyReply) {
  const users = userService.getAllUsers();

  reply.send(users);
}

function getOneUser(req, reply: FastifyReply) {
  const id = req.params.userId;
  console.log(req.params);
  const user = userService.getOneUser(id);

  reply.send(user);
}

function addUser(req, reply: FastifyReply) {
  const parsedReqBody = req.body;

  const user = userService.addUser(parsedReqBody);

  reply.code(codes.created).send(user);
}

function updateUser(req, reply: FastifyReply) {
  const id = req.params.userId;
  const parsedReqBody = req.body;

  const updatedUser = userService.updateUser(id, parsedReqBody);

  reply.send(updatedUser);
}

function deleteUser(req, reply: FastifyReply) {
  const id = req.params.userId;

  userService.deleteUser(id);

  reply.code(codes.noContent).send();
}

export { getAllUsers, getOneUser, addUser, updateUser, deleteUser };
