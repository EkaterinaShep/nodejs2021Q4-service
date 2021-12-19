const columnModelSchema = {
  type: 'object',
  required: ['title', 'order'],
  properties: {
    title: { type: 'string' },
    order: { type: 'integer' },
  },
} as const;

const boardModelSchema = {
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
      items: columnModelSchema,
    },
  },
} as const;

export { boardModelSchema };
