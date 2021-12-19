const columnSchema = {
  type: 'object',
  required: ['title', 'order'],
  properties: {
    title: { type: 'string' },
    order: { type: 'integer' },
  },
} as const;

const boardBodySchema = {
  type: 'object',
  required: ['title', 'columns'],
  properties: {
    title: { type: 'string' },
    columns: {
      type: 'array',
      items: columnSchema,
    },
  },
} as const;

const boardParamsSchema = {
  type: 'object',
  required: ['boardId'],
  properties: {
    boardId: {
      type: 'string',
      format: 'uuid',
    },
  },
} as const;

const boardResponseSchema = {
  '2xx': {
    type: 'object',
    required: ['id', 'title', 'columns'],
    properties: {
      id: {
        type: 'string',
        format: 'uuid',
      },
      title: { type: 'string' },
      columns: {
        type: 'array',
        items: columnSchema,
      },
    },
  },
} as const;

const boardSchema = {
  body: boardBodySchema,
  params: boardParamsSchema,
  response: boardResponseSchema,
};

export { boardSchema };
