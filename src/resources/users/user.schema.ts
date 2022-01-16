const userBodySchema = {
  type: 'object',
  required: ['name', 'login', 'password'],
  properties: {
    name: { type: 'string' },
    login: { type: 'string' },
    password: { type: 'string' },
  },
} as const;

const userParamsSchema = {
  type: 'object',
  required: ['userId'],
  properties: {
    userId: {
      type: 'string',
      format: 'uuid',
    },
  },
} as const;

const userResponseSchema = {
  '2xx': {
    type: 'object',
    required: ['id', 'name', 'login'],
    properties: {
      id: {
        type: 'string',
        format: 'uuid',
      },
      name: { type: 'string' },
      login: { type: 'string' },
    },
  },
} as const;

const userSchema = {
  body: userBodySchema,
  params: userParamsSchema,
  response: userResponseSchema,
};

export { userSchema };
