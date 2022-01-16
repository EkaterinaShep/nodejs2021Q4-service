const codes = {
  created: 201,
  noContent: 204,
  notFound: 404,
};

const logLevels = {
  '0': 'fatal',
  '1': 'error',
  '2': 'warn',
  '3': 'info',
  '4': 'debug',
  '5': 'trace',
} as const;

export { codes, logLevels };
