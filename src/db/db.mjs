const db = [];

function getAll() {
  return db;
}

function findOne(param, paramName) {
  return db.find((item) => item[paramName] === param);
}

function addItem(newItem) {
  db.push(newItem);
}

function findAndUpdate(param, paramName, newProperties) {
  const item = findOne(param, paramName);

  Object.assign(item, newProperties);

  return item;
}

function deleteOne(param, paramName) {
  const index = db.findIndex((item) => item[paramName] === param);

  db.splice(index, 1);
}

export { getAll, findOne, addItem, findAndUpdate, deleteOne };
