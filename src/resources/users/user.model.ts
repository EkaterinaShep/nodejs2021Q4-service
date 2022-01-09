const userModelSchema = {
  type: 'object',
  required: ['id', 'name', 'login', 'password'],
  properties: {
    id: {
      type: 'string',
      format: 'uuid',
    },
    name: { type: 'string' },
    login: { type: 'string' },
    password: { type: 'string' },
  },
} as const;

export { userModelSchema };
