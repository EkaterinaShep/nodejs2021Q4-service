// CustomError
class CustomError extends Error {
  statusCode: number = 500;

  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

// NotFoundError
class NotFoundError extends CustomError {
  constructor(message: string) {
    super(message);
    this.message = message;
    this.statusCode = 404;
  }
}

export { CustomError, NotFoundError };
