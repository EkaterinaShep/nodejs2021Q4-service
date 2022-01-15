import { getConnection } from 'typeorm';
import TaskEntity from '../../db/entities/task.entity';
import { TaskModel } from './task.types';

/**
 * Returns all tasks of a board with specified ID stored in the database
 *
 * @param boardId - id of the target board
 * @returns Array of tasks. Each task is an object with type {@link TaskModel}
 */
async function getAllTasks(_boardId: string) {
  return getConnection().getRepository(TaskEntity).find();
}

/**
 * Returns a task with given ID stored in the database
 *
 * @param id - id of the target task
 * @returns Object with the type {@link TaskModel} that has specified ID. If there isn't a task with given ID in the database, the method returns undefined
 */
async function getOneTask(id: string) {
  return getConnection().getRepository(TaskEntity).findOne({ where: { id } });
}

/**
 * Adds a task to the database
 *
 * @param task - object that has the type {@link TaskModel}
 */
async function addTask(task: TaskModel) {
  await getConnection()
    .createQueryBuilder()
    .insert()
    .into(TaskEntity)
    .values([task])
    .execute();
}

/**
 * Updates a task stored in the database
 *
 * @param id - id of the target task
 * @param newProperties - object that contains properties that should be updated in the target task
 * @returns Updated task, object with the type {@link TaskModel} that has specified ID. If there isn't a task with given ID in the database, the method returns undefined
 */
async function updateTask(id: string, newProperties: Partial<TaskModel>) {
  await getConnection()
    .createQueryBuilder()
    .update(TaskEntity)
    .set(newProperties)
    .where('id = :id', { id })
    .execute();

  return getOneTask(id);
}

/**
 * Deletes a task with specified ID from the database
 *
 * @param id - id of the target task
 */
async function deleteTask(id: string) {
  await getConnection()
    .createQueryBuilder()
    .delete()
    .from(TaskEntity)
    .where('id = :id', { id })
    .execute();
}

/**
 * Deletes all tasks of a board with specified ID from the database
 *
 * @param boardId - id of the target board
 */
async function deleteTasks(boardId: string) {
  await getConnection()
    .createQueryBuilder()
    .delete()
    .from(TaskEntity)
    .where('boardId = :boardId', { boardId })
    .execute();
}

/**
 * Updates all task stored in the database whose userId field has specified value
 *
 * @param userId - id of the target user
 * @param newIdProp - object with userId field. Value of the field should be null
 */
async function updateTasks(userId: string, newIdProp: { userId: null }) {
  await getConnection()
    .createQueryBuilder()
    .update(TaskEntity)
    .set(newIdProp)
    .where('userId = :userId', { userId })
    .execute();
}

export {
  getAllTasks,
  getOneTask,
  addTask,
  updateTask,
  deleteTask,
  deleteTasks,
  updateTasks,
};
