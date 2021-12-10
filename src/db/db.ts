import { DB, Item, Collection } from './types';

const db: DB = {
  users: [],
  boards: [],
  tasks: [],
};

/**
 * Returns all or some, satisfied a name-value pair, items of one of the collections stored in database
 *
 * @param collection - name of the collection. The method accepts one of the {@link Collection}'s members
 * @param fieldValue - value of the field by which selection of collection's items should take place
 * @param fieldName - name of the field by which selection of collection's items should take place
 *
 * @returns Array that holds all items in the specified collection or items that satisfies the specified query or undefined
 */
function getAll(
  collection: Collection,
  fieldValue?: string,
  fieldName?: string
) {
  if (fieldValue && fieldName) {
    return (db[collection] as Array<Item>).filter(
      (item) => item[fieldName] === fieldValue
    );
  }

  return db[collection];
}

/**
 * Returns one item that satisfies the specified query criteria on the specified collection
 *
 * @param collection - name of the collection. The method accepts one of the {@link Collection}'s members
 * @param fieldValue - value of the field by which search should take place
 * @param fieldName - name of the field by which search should take place
 *
 * @returns One item that satisfies the specified query criteria or undefined. If multiple items satisfy the query, the method returns the first item satisfied the query
 */
function findOne(
  collection: Collection,
  fieldValue: string,
  fieldName: string
) {
  return (db[collection] as Array<Item>).find(
    (item) => item[fieldName] === fieldValue
  );
}

/**
 *  Adds an item to the specified collection
 *
 * @param collection - name of the collection. The method accepts one of the {@link Collection}'s members
 * @param newItem - item that should be added to the collection. The type of the item is one of the {@link Item}'s members
 */
function addItem(collection: Collection, newItem: Item) {
  (db[collection] as Array<Item>).push(newItem);
}

/**
 * Finds and updates an item within the collection
 *
 * @param collection - name of the collection. The method accepts one of the {@link Collection}'s members
 * @param fieldValue - value of the field by which search of the item should take place
 * @param fieldName - name of the field by which search of the item should take place
 * @param newProperties -  object with properties that should be updated
 *
 * @returns The updated item with one of the {@link Item}'s type or undefined
 */
function findAndUpdate(
  collection: Collection,
  fieldValue: string,
  fieldName: string,
  newProperties: Partial<Item>
) {
  const item = findOne(collection, fieldValue, fieldName);

  Object.assign(item, newProperties);

  return item;
}

/**
 * Finds and updates some items within the collection
 *
 * @param collection - name of the collection. The method accepts one of the {@link Collection}'s members
 * @param fieldValue - value of the field by which search should take place
 * @param fieldName - name of the field by which search should take place
 * @param newProperties -  object with properties that should be updated
 */
function findAndUpdateMany(
  collection: Collection,
  fieldValue: string,
  fieldName: string,
  newProperties: Partial<Item>
) {
  db[collection].forEach((item) => {
    if (item[fieldName] === fieldValue) {
      Object.assign(item, newProperties);
    }
  });
}

/**
 * Deletes an items from the specified collection
 *
 * @param collection - name of the collection. The method accepts one of the {@link Collection}'s members
 * @param fieldValue - value of the field that has the target item
 * @param fieldName - name of the field that has the target item
 */
function deleteOne(
  collection: Collection,
  fieldValue: string,
  fieldName: string
) {
  const index = db[collection].findIndex(
    (item) => item[fieldName] === fieldValue
  );

  db[collection].splice(index, 1);
}

/**
 * Deletes items that satisfies the specified query criteria from the specified collection
 *
 * @param collection - name of the collection. The method accepts one of the {@link Collection}'s members
 * @param fieldValue - value of the field that has the target items
 * @param fieldName - name of the field that has the target items
 */
function deleteMany(
  collection: Collection,
  fieldValue: string,
  fieldName: string
) {
  (db[collection] as Array<Item>) = (db[collection] as Array<Item>).filter(
    (item) => item[fieldName] !== fieldValue
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
