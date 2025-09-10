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
var target = document.querySelector("taskboard-manager");
var configPanel = target.shadowRoot.querySelector("config-panel");
var staticProperties = {
  target,
  appMenu: target.shadowRoot.querySelector("app-menu"),
  configPanel,
  historyPanel: configPanel.shadowRoot.querySelector("history-panel"),
  boardSettingsPanel: target.shadowRoot.querySelector("board-settings")
};
var dynamicProperties = {
  targetBoardId: void 0,
  targetListId: void 0,
  targetTaskId: void 0
};
async function initializeTargetBoard(refresh = false) {
  if (dynamicProperties.targetBoardId != null && refresh == false) {
    return;
  }
  await target.clearData(false);
  const newBoardButton = staticProperties.appMenu.shadowRoot.querySelector(".new-board-button");
  newBoardButton.click();
  dynamicProperties.targetBoardId = await new Promise(async (resolve, reject) => {
    await new Promise((done) => setTimeout(done, 300));
    const boardElement = staticProperties.appMenu.shadowRoot.querySelector(".board");
    if (boardElement == null) {
      reject();
      return;
    }
    const route = boardElement.dataset.route;
    if (route == null) {
      reject();
      return;
    }
    resolve(route.substring(6));
  });
}
async function initializeTargetList(refresh = false) {
  if (dynamicProperties.targetListId != null && refresh == false) {
    return;
  }
  await initializeTargetBoard();
  const boardElement = staticProperties.appMenu.shadowRoot.querySelector(".board");
  if (boardElement == null) {
    throw new Error("Board not found");
  }
  const editButton = boardElement.querySelector(".edit");
  if (editButton == null) {
    throw new Error("Edit button not found");
  }
  editButton.click();
  await new Promise((resolve) => setTimeout(resolve, 300));
  const addListButton = staticProperties.boardSettingsPanel.shadowRoot.querySelector("#add-list-button");
  if (addListButton == null) {
    throw new Error("Add List button not found");
  }
  addListButton.click();
  await awaitFrames();
  const confirmButton = staticProperties.boardSettingsPanel.shadowRoot.querySelector("#board-settings-save");
  if (confirmButton == null) {
    throw new Error("Confirm button not found");
  }
  confirmButton.click();
  await awaitFrames(15);
  const lists = [...target.shadowRoot.querySelectorAll("task-list")];
  const list = lists.pop();
  dynamicProperties.targetListId = list?.getAttribute("data-tasklist-id") ?? void 0;
}
async function initializeTargetTask(refresh = false) {
  if (dynamicProperties.targetTaskId != null && refresh == false) {
    return;
  }
  await initializeTargetBoard();
  const boardElement = staticProperties.appMenu.shadowRoot.querySelector(".board");
  if (boardElement == null) {
    throw new Error("Board not found");
  }
  boardElement.click();
  await awaitFrames();
  const addTaskButton = target.shadowRoot.querySelector(".add-task-button");
  if (addTaskButton == null) {
    throw new Error("Add Task button not found");
  }
  addTaskButton.click();
  await awaitFrames(15);
  const task = target.shadowRoot.querySelector("task-card");
  if (task == null) {
    throw new Error("Task not found");
  }
  dynamicProperties.targetTaskId = task.dataset.taskId;
}
async function awaitFrames(framesToAwait = 1) {
  let framesAwaited = 0;
  return new Promise((resolve) => {
    const requestCallback = () => {
      framesAwaited++;
      if (framesAwaited < framesToAwait) {
        requestAnimationFrame(requestCallback);
        return;
      }
      resolve();
    };
    requestAnimationFrame(requestCallback);
  });
}

export {
  initResources,
  getAllAppData,
  getAllData,
  staticProperties,
  dynamicProperties,
  initializeTargetBoard,
  initializeTargetList,
  initializeTargetTask,
  awaitFrames
};
