const taskBodySchema = {
  type: 'object',
  required: ['title', 'order', 'description', 'userId', 'boardId'],
  properties: {
    title: { type: 'string' },
    order: { type: 'integer' },
    description: { type: 'string' },
    userId: {
      oneOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
    },
    boardId: {
      oneOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
    },
    columnId: {
      oneOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
    },
  },
};

const taskParamsSchema = {
  type: 'object',
  required: ['taskId'],
  properties: {
    taskId: {
      type: 'string',
      format: 'uuid',
    },
  },
};

const taskResponseSchema = {
  '2xx': {
    type: 'object',
    required: ['id', 'title', 'order', 'description', 'userId', 'boardId'],
    properties: {
      id: {
        type: 'string',
        format: 'uuid',
      },
      title: { type: 'string' },
      order: { type: 'integer' },
      description: { type: 'string' },
      userId: {
        oneOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
      },
      boardId: {
        oneOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
      },
      columnId: {
        oneOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
      },
    },
  },
};

const taskSchema = {
  body: taskBodySchema,
  params: taskParamsSchema,
  response: taskResponseSchema,
};

export { taskSchema };
