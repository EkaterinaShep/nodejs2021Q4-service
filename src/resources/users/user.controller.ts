import { FastifyReply, FastifyRequest } from 'fastify';
import * as userService from './user.service';
import { codes } from '../../constants/constants';
import {
  UserDeleteReq,
  UserGetByIdReq,
  UserPostReq,
  UserPutReq,
} from './user.types';

/**
 * Replies on a get request setting the status code to 200 and sending all users received from a user service
 *
 * @param _req - Fastify Request object
 * @param reply - Fastify Reply object
 */
function getAllUsers(_req: FastifyRequest, reply: FastifyReply) {
  const users = userService.getAllUsers();

  reply.send(users);
}

/**
 * Replies on a get request setting the status code to 200 and sending one user received from a user service. If there isn't the user in the database, the method returns 404 status code
 *
 * @param req - Fastify Request object with type {@link UserGetByIdReq}
 * @param reply - Fastify Reply object
 */
function getOneUser(req: UserGetByIdReq, reply: FastifyReply) {
  const id = req.params.userId;

  const user = userService.getOneUser(id);

  reply.send(user);
}

/**
 * Sends received from post request body to a user service. Replies on the request setting the status code to 201 and sending one user added to the database and received from the user service
 *
 * @param req - Fastify Request object with type {@link UserPostReq}
 * @param reply - Fastify Reply object
 */
function addUser(req: UserPostReq, reply: FastifyReply) {
  const parsedReqBody = req.body;

  const user = userService.addUser(parsedReqBody);

  reply.code(codes.created).send(user);
}

/**
 * Sends received from put request body and userId to a user service for updating of a user. Replies on the request setting the status code to 200 and sending updated user received from the user service
 *
 * @param req - Fastify Request object with type {@link UserPutReq}
 * @param reply - Fastify Reply object
 */
function updateUser(req: UserPutReq, reply: FastifyReply) {
  const id = req.params.userId;

  const parsedReqBody = req.body;

  const updatedUser = userService.updateUser(id, parsedReqBody);

  reply.send(updatedUser);
}

/**
 * Sends received from delete request userId to a user service for deletion the target user from the database. Replies on the request setting the status code to 204
 *
 * @param req - Fastify Request object with type {@link UserDeleteReq}
 * @param reply - Fastify Reply object
 */
function deleteUser(req: UserDeleteReq, reply: FastifyReply) {
  const id = req.params.userId;

  userService.deleteUser(id);

  reply.code(codes.noContent).send();
}

export { getAllUsers, getOneUser, addUser, updateUser, deleteUser };
