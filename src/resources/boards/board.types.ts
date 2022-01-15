import { FastifyRequest } from 'fastify';
import { FromSchema } from 'json-schema-to-ts';
import { boardModelSchema, columnModelSchema } from './board.model';
import { boardSchema } from './board.schema';

type BoardModel = FromSchema<typeof boardModelSchema>;
type ColumnModel = FromSchema<typeof columnModelSchema>;

type BoardBody = FromSchema<typeof boardSchema.body>;
type BoardParams = FromSchema<typeof boardSchema.params>;
type BoardResponse = FromSchema<typeof boardSchema.response['2xx']>;

type BoardPostReq = FastifyRequest<{
  Body: BoardBody;
}>;

type BoardPutReq = FastifyRequest<{
  Body: BoardBody;
  Params: BoardParams;
}>;

type BoardGetByIdReq = FastifyRequest<{
  Params: BoardParams;
}>;

type BoardDeleteReq = FastifyRequest<{
  Params: BoardParams;
}>;

export {
  BoardModel,
  ColumnModel,
  BoardBody,
  BoardParams,
  BoardResponse,
  BoardPostReq,
  BoardGetByIdReq,
  BoardPutReq,
  BoardDeleteReq,
};
