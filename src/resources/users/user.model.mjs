import { randomUUID } from 'crypto';

class User {
  constructor({ name = 'USER', login = 'user', password = 'P@55w0rd' }) {
    this.id = randomUUID();
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static getResponse(user) {
    const { id, name, login } = user;

    return { id, name, login };
  }
}

export { User };
