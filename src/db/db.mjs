const db = {
  users: [],
  boards: [],
};

function getAll(collection) {
  return db[collection];
}

function findOne(collection, param, paramName) {
  return db[collection].find((item) => item[paramName] === param);
}

function addItem(collection, newItem) {
  db[collection].push(newItem);
}

function findAndUpdate(collection, param, paramName, newProperties) {
  const item = findOne(collection, param, paramName);

  Object.assign(item, newProperties);

  return item;
}

function deleteOne(collection, param, paramName) {
  const index = db[collection].findIndex((item) => item[paramName] === param);

  db[collection].splice(index, 1);
}

export { getAll, findOne, addItem, findAndUpdate, deleteOne };
