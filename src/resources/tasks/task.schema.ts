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
} as const;

const taskParamsSchema = {
  type: 'object',
  required: ['boardId', 'taskId'],
  properties: {
    boardId: {
      type: 'string',
      format: 'uuid',
    },
    taskId: {
      type: 'string',
      format: 'uuid',
    },
  },
} as const;

const taskParamsWithoutTaskIdSchema = {
  type: 'object',
  required: ['boardId'],
  properties: {
    boardId: {
      type: 'string',
      format: 'uuid',
    },
  },
} as const;

const taskResponseSchema = {
  '2xx': {
    type: 'object',
    // required: ['id', 'title', 'order', 'description', 'userId', 'boardId'],
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
} as const;

const taskSchema = {
  body: taskBodySchema,
  params: taskParamsSchema,
  response: taskResponseSchema,
};

export { taskSchema, taskParamsWithoutTaskIdSchema };
