import { FastifyReply, FastifyRequest } from 'fastify';
import * as userService from './user.service';
import { codes } from '../../constants/constants';
import {
  UserDeleteReq,
  UserGetByIdReq,
  UserPostReq,
  UserPutReq,
} from './user.types';

function getAllUsers(_req: FastifyRequest, reply: FastifyReply) {
  const users = userService.getAllUsers();

  reply.send(users);
}

function getOneUser(req: UserGetByIdReq, reply: FastifyReply) {
  const id = req.params.userId;

  const user = userService.getOneUser(id);

  reply.send(user);
}

function addUser(req: UserPostReq, reply: FastifyReply) {
  const parsedReqBody = req.body;

  const user = userService.addUser(parsedReqBody);

  reply.code(codes.created).send(user);
}

function updateUser(req: UserPutReq, reply: FastifyReply) {
  const id = req.params.userId;

  const parsedReqBody = req.body;

  const updatedUser = userService.updateUser(id, parsedReqBody);

  reply.send(updatedUser);
}

function deleteUser(req: UserDeleteReq, reply: FastifyReply) {
  const id = req.params.userId;

  userService.deleteUser(id);

  reply.code(codes.noContent).send();
}

export { getAllUsers, getOneUser, addUser, updateUser, deleteUser };
