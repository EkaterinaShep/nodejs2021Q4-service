import * as boardService from './board.service.mjs';
import { codes } from '../../constants/constants.mjs';

function getAllBoards(req, reply) {
  const boards = boardService.getAllBoards();

  reply.send(boards);
}

function getOneBoard(req, reply) {
  const id = req.params.boardId;

  const board = boardService.getOneBoard(id);

  if (board) {
    reply.send(board);
  }

  reply.code(codes.notFound).send();
}

function addBoard(req, reply) {
  const parsedReqBody = req.body;

  const board = boardService.addBoard(parsedReqBody);

  reply.code(codes.created).send(board);
}

function updateBoard(req, reply) {
  const id = req.params.boardId;
  const parsedReqBody = req.body;

  const updatedBoard = boardService.updateBoard(id, parsedReqBody);

  reply.send(updatedBoard);
}

function deleteBoard(req, reply) {
  const id = req.params.boardId;

  boardService.deleteBoard(id);

  reply.code(codes.noContent).send();
}

export { getAllBoards, getOneBoard, addBoard, updateBoard, deleteBoard };
