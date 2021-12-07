const db = {
  users: [],
  boards: [],
  tasks: [],
};

function getAll(collection, param, paramName) {
  if (param) {
    return db[collection].filter((item) => item[paramName] === param);
  }

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

function findAndUpdateMany(collection, param, paramName, newProperties) {
  db[collection].forEach((item) => {
    if (item[paramName] === param) {
      Object.assign(item, newProperties);
    }
  });
}

function deleteOne(collection, param, paramName) {
  const index = db[collection].findIndex((item) => item[paramName] === param);

  db[collection].splice(index, 1);
}

function deleteMany(collection, param, paramName) {
  db[collection] = db[collection].filter((item) => item[paramName] !== param);
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
