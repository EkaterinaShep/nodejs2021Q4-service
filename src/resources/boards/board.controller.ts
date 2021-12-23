import { FastifyReply, FastifyRequest } from 'fastify';
import * as boardService from './board.service';
import { codes } from '../../constants/constants';
import {
  BoardDeleteReq,
  BoardGetByIdReq,
  BoardPostReq,
  BoardPutReq,
} from './board.types';

/**
 * Replies on a get request setting the status code to 200 and sending all boards received from a board service
 *
 * @param _req - Fastify Request object
 * @param reply - Fastify Reply object
 */
function getAllBoards(_req: FastifyRequest, reply: FastifyReply) {
  const boards = boardService.getAllBoards();

  reply.send(boards);
}

/**
 * Replies on a get request setting the status code to 200 and sending one board received from a board service
 *
 * @param req - Fastify Request object with type {@link BoardGetByIdReq}
 * @param reply - Fastify Reply object
 */
function getOneBoard(req: BoardGetByIdReq, reply: FastifyReply) {
  const { boardId } = req.params;

  const board = boardService.getOneBoard(boardId);

  reply.send(board);
}

/**
 * Sends received from post request body to a board service. Replies on the request setting the status code to 201 and sending one board added to the database and received from the board service
 *
 * @param req - Fastify Request object with type {@link BoardPostReq}
 * @param reply - Fastify Reply object
 */
function addBoard(req: BoardPostReq, reply: FastifyReply) {
  const parsedReqBody = req.body;

  const board = boardService.addBoard(parsedReqBody);

  reply.code(codes.created).send(board);
}

/**
 * Sends received from put request body and boardId to a board service for updating of a board. Replies on the request setting the status code to 200 and sending updated board received from the board service
 *
 * @param req - Fastify Request object with type {@link BoardPutReq}
 * @param reply - Fastify Reply object
 */
function updateBoard(req: BoardPutReq, reply: FastifyReply) {
  const id = req.params.boardId;
  const parsedReqBody = req.body;

  const updatedBoard = boardService.updateBoard(id, parsedReqBody);

  reply.send(updatedBoard);
}

/**
 * Sends received from delete request boardId to a board service for deletion the target board from the database. Replies on the request setting the status code to 204
 *
 * @param req - Fastify Request object with type {@link BoardDeleteReq}
 * @param reply - Fastify Reply object
 */
function deleteBoard(req: BoardDeleteReq, reply: FastifyReply) {
  const id = req.params.boardId;

  boardService.deleteBoard(id);

  reply.code(codes.noContent).send();
}

export { getAllBoards, getOneBoard, addBoard, updateBoard, deleteBoard };
