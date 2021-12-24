import { CustomError } from './custom-error';

// NotFoundError
class NotFoundError extends CustomError {
  constructor(message: string) {
    super(message);
    this.message = message;
    this.statusCode = 404;
  }
}

export { NotFoundError };
