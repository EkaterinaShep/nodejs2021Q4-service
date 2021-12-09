import { FastifyRequest } from 'fastify';
import { FromSchema } from 'json-schema-to-ts';
import { taskModelSchema } from './task.model';
import { taskParamsWithoutTaskIdSchema, taskSchema } from './task.schema';

type TaskModel = FromSchema<typeof taskModelSchema>;
type TaskBody = FromSchema<typeof taskSchema.body>;
type TaskParams = FromSchema<typeof taskSchema.params>;
type TaskParamsWithoutTaskId = FromSchema<typeof taskParamsWithoutTaskIdSchema>;
type TaskResponse = FromSchema<typeof taskSchema.response['2xx']>;

type TaskPostReq = FastifyRequest<{
  Body: TaskBody;
  Params: TaskParamsWithoutTaskId;
}>;

type TaskPutReq = FastifyRequest<{
  Body: TaskBody;
  Params: TaskParams;
}>;

type TaskGetByIdReq = FastifyRequest<{
  Params: TaskParams;
}>;

type TaskGetAllReq = FastifyRequest<{
  Params: TaskParamsWithoutTaskId;
}>;

type TaskDeleteReq = FastifyRequest<{
  Params: TaskParams;
}>;

export {
  TaskModel,
  TaskBody,
  TaskParams,
  TaskResponse,
  TaskPostReq,
  TaskGetByIdReq,
  TaskPutReq,
  TaskDeleteReq,
  TaskGetAllReq,
};
