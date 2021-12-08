import { FastifyReply, FastifyRequest } from 'fastify';
import * as boardService from './board.service';
import { codes } from '../../constants/constants';
import {
  BoardDeleteReq,
  BoardGetByIdReq,
  BoardPostReq,
  BoardPutReq,
  BoardResponse,
} from './board.types';

function getAllBoards(_req: FastifyRequest, reply: FastifyReply) {
  const boards: Array<BoardResponse> = boardService.getAllBoards();

  reply.send(boards);
}

function getOneBoard(req: BoardGetByIdReq, reply: FastifyReply) {
  const boardId = req.params.boardId;

  const board: BoardResponse = boardService.getOneBoard(boardId);

  if (board) {
    reply.send(board);
  }

  reply.code(codes.notFound).send();
}

function addBoard(req: BoardPostReq, reply: FastifyReply) {
  const parsedReqBody = req.body;

  const board: BoardResponse = boardService.addBoard(parsedReqBody);

  reply.code(codes.created).send(board);
}

function updateBoard(req: BoardPutReq, reply: FastifyReply) {
  const id = req.params.boardId;
  const parsedReqBody = req.body;

  const updatedBoard: BoardResponse = boardService.updateBoard(
    id,
    parsedReqBody
  );

  reply.send(updatedBoard);
}

function deleteBoard(req: BoardDeleteReq, reply: FastifyReply) {
  const id = req.params.boardId;

  boardService.deleteBoard(id);

  reply.code(codes.noContent).send();
}

export { getAllBoards, getOneBoard, addBoard, updateBoard, deleteBoard };
