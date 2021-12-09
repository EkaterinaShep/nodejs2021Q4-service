import { BoardModel } from '../resources/boards/board.types';
import { TaskModel } from '../resources/tasks/task.types';
import { UserModel } from '../resources/users/user.types';

interface DB {
  boards: Array<BoardModel>;
  tasks: Array<TaskModel>;
  users: Array<UserModel>;
}

type Item = BoardModel | TaskModel | UserModel;

export { DB, Item };
