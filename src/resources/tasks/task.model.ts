const taskModelSchema = {
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
} as const;

export { taskModelSchema };
