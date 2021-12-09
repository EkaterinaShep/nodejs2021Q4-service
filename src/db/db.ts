import { DB, Item } from './types';

const collections = ['users', 'boards', 'tasks'] as const;

const db: DB = {
  users: [],
  boards: [],
  tasks: [],
};

function getAll(
  collection: typeof collections[number],
  param?: string,
  paramName?: string
) {
  if (param && paramName) {
    return (db[collection] as Array<Item>).filter(
      (item) => item[paramName] === param
    );
  }

  return db[collection];
}

function findOne(
  collection: typeof collections[number],
  param: string,
  paramName: string
) {
  return (db[collection] as Array<Item>).find(
    (item) => item[paramName] === param
  );
}

function addItem(collection: typeof collections[number], newItem: Item) {
  (db[collection] as Array<Item>).push(newItem);
}

function findAndUpdate(
  collection: typeof collections[number],
  param: string,
  paramName: string,
  newProperties: Partial<Item>
) {
  const item = findOne(collection, param, paramName);

  Object.assign(item, newProperties);

  return item;
}

function findAndUpdateMany(
  collection: typeof collections[number],
  param: string,
  paramName: string,
  newProperties: Partial<Item>
) {
  db[collection].forEach((item) => {
    if (item[paramName] === param) {
      Object.assign(item, newProperties);
    }
  });
}

function deleteOne(
  collection: typeof collections[number],
  param: string,
  paramName: string
) {
  const index = db[collection].findIndex((item) => item[paramName] === param);

  db[collection].splice(index, 1);
}

function deleteMany(
  collection: typeof collections[number],
  param: string,
  paramName: string
) {
  (db[collection] as Array<Item>) = (db[collection] as Array<Item>).filter(
    (item) => item[paramName] !== param
  );
}

export {
  getAll,
  findOne,
  addItem,
  findAndUpdate,
  deleteOne,
  deleteMany,
  findAndUpdateMany,
};
