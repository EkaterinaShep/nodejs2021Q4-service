const columnSchema = {
  type: 'object',
  required: ['title', 'order'],
  properties: {
    title: { type: 'string' },
    order: { type: 'integer' },
  },
};

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
};

const boardParamsSchema = {
  type: 'object',
  required: ['boardId'],
  properties: {
    boardId: {
      type: 'string',
      format: 'uuid',
    },
  },
};

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
};

const boardSchema = {
  body: boardBodySchema,
  params: boardParamsSchema,
  response: boardResponseSchema,
};


export { boardSchema };
