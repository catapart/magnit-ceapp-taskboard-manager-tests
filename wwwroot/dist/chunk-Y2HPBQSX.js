// src/resources.ts
var database;
var initialized = false;
function initResources() {
  if (initialized == true) {
    return;
  }
  const request = indexedDB.open("TaskManager", 1);
  request.onsuccess = (event) => {
    const dbEvent = event.target;
    database = dbEvent.result;
  };
  initialized = true;
}
async function getAllAppData() {
  const appData = {
    actionHistoryEntries: await getAllData("actionHistoryEntries"),
    boards: await getAllData("boards"),
    customImages: await getAllData("customImages"),
    keyValue: await getAllData("keyValue"),
    taskSettings: await getAllData("taskSettings"),
    tasklists: await getAllData("tasklists"),
    tasks: await getAllData("tasks")
  };
  return appData;
}
async function getAllData(storeName) {
  if (database == null) {
    throw new Error("The database has not been opened.");
  }
  const transaction = database.transaction([storeName], "readonly");
  transaction.onerror = (event) => {
    throw event;
  };
  const value = await new Promise((resolve, reject) => {
    const objectStore = transaction.objectStore(storeName);
    const request = objectStore.getAll();
    request.onsuccess = (event) => {
      const items = event.target.result;
      const result = items == null ? [] : items.map((item) => item.value);
      resolve(result);
    };
    request.onerror = (event) => {
      reject(event);
    };
  });
  return value;
}

export {
  initResources,
  getAllAppData,
  getAllData
};
