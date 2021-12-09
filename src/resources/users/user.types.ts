import { FastifyRequest } from 'fastify';
import { FromSchema } from 'json-schema-to-ts';
import { userModelSchema } from './user.model';
import { userSchema } from './user.schema';

type UserModel = FromSchema<typeof userModelSchema>;
type UserBody = FromSchema<typeof userSchema.body>;
type UserParams = FromSchema<typeof userSchema.params>;
type UserResponse = FromSchema<typeof userSchema.response['2xx']>;

type UserPostReq = FastifyRequest<{
  Body: UserBody;
}>;

type UserPutReq = FastifyRequest<{
  Body: UserBody;
  Params: UserParams;
}>;

type UserGetByIdReq = FastifyRequest<{
  Params: UserParams;
}>;

type UserDeleteReq = FastifyRequest<{
  Params: UserParams;
}>;

export {
  UserModel,
  UserBody,
  UserParams,
  UserResponse,
  UserPostReq,
  UserGetByIdReq,
  UserPutReq,
  UserDeleteReq,
};
