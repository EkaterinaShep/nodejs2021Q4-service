// CustomError
class CustomError extends Error {
  statusCode = 500;

  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

export { CustomError };
