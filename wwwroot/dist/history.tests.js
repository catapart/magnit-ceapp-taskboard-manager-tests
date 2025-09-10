import {
  expect
} from "./chunk-EBJVJICN.js";
import {
  awaitFrames,
  dynamicProperties,
  initializeTargetBoard,
  initializeTargetList,
  initializeTargetTask,
  staticProperties
} from "./chunk-R2DHCA5W.js";

// src/history.tests.ts
async function getLastHistoryEntry(framesToAwait = 1) {
  await awaitFrames(framesToAwait);
  const openSettingsButton = staticProperties.appMenu.shadowRoot.querySelector("#open-settings-button");
  const historyNavItem = staticProperties.configPanel.shadowRoot.querySelector("#history-nav-item");
  openSettingsButton.click();
  historyNavItem.click();
  const entries = staticProperties.historyPanel.shadowRoot.querySelectorAll(`[data-entry]`);
  const entry = entries[entries.length - 1];
  return entry;
}
function getHistoryEntryTypeAndId(entry) {
  const targetIdElement = entry.querySelector(".target-id");
  const targetTypeElement = entry.querySelector(".action-type");
  const targetId = targetIdElement.textContent;
  const targetType = targetTypeElement.textContent;
  return { targetId, targetType };
}
var history_tests_default = {
  "should log create board to action history": async () => {
    try {
      await initializeTargetBoard();
      const entry = await getLastHistoryEntry();
      await expect(entry).toBeDefined();
      const targetIdElement = entry.querySelector(".target-id");
      await expect(targetIdElement).toBeDefined();
      const targetId = targetIdElement.textContent;
      await expect(dynamicProperties.targetBoardId).toBe(targetId);
    } finally {
      const closeButton = staticProperties.configPanel.shadowRoot.querySelector("#config-cancel");
      closeButton.click();
    }
  },
  "should log update board to action history": async () => {
    if (dynamicProperties.targetBoardId == null) {
      await initializeTargetBoard();
    }
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
    const boardNameInput = staticProperties.boardSettingsPanel.shadowRoot.querySelector("#board-name");
    if (boardNameInput == null) {
      throw new Error("Board name input not found");
    }
    boardNameInput.value = "Test board name";
    const saveButton = staticProperties.boardSettingsPanel.shadowRoot.querySelector(".action-button.ok");
    if (saveButton == null) {
      throw new Error("Save button not found");
    }
    saveButton.click();
    await new Promise((resolve) => setTimeout(resolve, 1e3));
    const entry = await getLastHistoryEntry();
    await expect(entry).toBeDefined();
    const { targetId, targetType } = getHistoryEntryTypeAndId(entry);
    await expect(dynamicProperties.targetBoardId).toBe(targetId);
    await expect(targetType).toBe("UPDATE");
  },
  "should log delete board to action history": async () => {
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
    const deleteButton = staticProperties.boardSettingsPanel.shadowRoot.querySelector("#remove-board-button");
    if (deleteButton == null) {
      throw new Error("Delete button not found");
    }
    deleteButton.click();
    await new Promise((resolve) => setTimeout(resolve, 300));
    const confirmButton = staticProperties.target.shadowRoot.querySelector("#confirmation-confirm-button");
    if (confirmButton == null) {
      throw new Error("Confirm button not found");
    }
    confirmButton.click();
    await new Promise((resolve) => setTimeout(resolve, 300));
    const entry = await getLastHistoryEntry();
    await expect(entry).toBeDefined();
    const { targetId, targetType } = getHistoryEntryTypeAndId(entry);
    await expect(dynamicProperties.targetBoardId).toBe(targetId);
    await expect(targetType).toBe("DELETE");
  },
  "should log create list to action history": async () => {
    await initializeTargetList();
    const entry = await getLastHistoryEntry();
    await expect(entry).toBeDefined();
    const { targetId, targetType } = getHistoryEntryTypeAndId(entry);
    await expect(dynamicProperties.targetListId).toBe(targetId);
    await expect(targetType).toBe("CREATE");
  },
  "should log update list to action history": async () => {
    await initializeTargetList();
    const boardElement = staticProperties.appMenu.shadowRoot.querySelector(".board");
    if (boardElement == null) {
      throw new Error("Board not found");
    }
    const editButton = boardElement.querySelector(".edit");
    if (editButton == null) {
      throw new Error("Edit button not found");
    }
    editButton.click();
    await awaitFrames();
    const listSettings = staticProperties.target.shadowRoot.querySelector(`[tasklist-record-id="${dynamicProperties.targetListId}"]`);
    if (listSettings == null) {
      throw new Error("List settings not found");
    }
    const listNameInput = listSettings.shadowRoot.querySelector(".input.name");
    if (listNameInput == null) {
      throw new Error("List name input not found");
    }
    listNameInput.value = "Test list name";
    const saveButton = staticProperties.boardSettingsPanel.shadowRoot.querySelector(".action-button.ok");
    if (saveButton == null) {
      throw new Error("Save button not found");
    }
    saveButton.click();
    await new Promise((resolve) => setTimeout(resolve, 1e3));
    const entry = await getLastHistoryEntry();
    await expect(entry).toBeDefined();
    const { targetId, targetType } = getHistoryEntryTypeAndId(entry);
    await expect(dynamicProperties.targetListId).toBe(targetId);
    await expect(targetType).toBe("UPDATE");
  },
  "should log delete list to action history": async () => {
    await initializeTargetList();
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
    const listSettings = staticProperties.target.shadowRoot.querySelector(`[tasklist-record-id="${dynamicProperties.targetListId}"]`);
    if (listSettings == null) {
      throw new Error("List settings not found");
    }
    const deleteButton = listSettings.shadowRoot.querySelector("#tasklist-settings-remove-button");
    if (deleteButton == null) {
      throw new Error("Delete button not found");
    }
    deleteButton.click();
    await new Promise((resolve) => setTimeout(resolve, 300));
    const saveButton = staticProperties.boardSettingsPanel.shadowRoot.querySelector(".action-button.ok");
    if (saveButton == null) {
      throw new Error("Save button not found");
    }
    saveButton.click();
    await new Promise((resolve) => setTimeout(resolve, 1e3));
    const entry = await getLastHistoryEntry();
    await expect(entry).toBeDefined();
    const { targetId, targetType } = getHistoryEntryTypeAndId(entry);
    await expect(dynamicProperties.targetListId).toBe(targetId);
    await expect(targetType).toBe("DELETE");
  },
  "should log create task to action history": async () => {
    await initializeTargetTask();
    const entry = await getLastHistoryEntry();
    await expect(entry).toBeDefined();
    const { targetId, targetType } = getHistoryEntryTypeAndId(entry);
    await expect(dynamicProperties.targetTaskId).toBe(targetId);
    await expect(targetType).toBe("CREATE");
  },
  "should log update task to action history": async () => {
    await initializeTargetTask();
    const task = staticProperties.target.shadowRoot.querySelector("task-card");
    if (task == null) {
      throw new Error("Task not found");
    }
    const taskDescription = task.shadowRoot.querySelector("#description");
    if (taskDescription == null) {
      throw new Error("Task description not found");
    }
    taskDescription.textContent = "Task content";
    taskDescription.blur();
    await awaitFrames();
    const entry = await getLastHistoryEntry();
    await expect(entry).toBeDefined();
    const { targetId, targetType } = getHistoryEntryTypeAndId(entry);
    await expect(dynamicProperties.targetTaskId).toBe(targetId);
    await expect(targetType).toBe("UPDATE");
  },
  "should log delete task to action history": async () => {
    await initializeTargetTask();
    const task = staticProperties.target.shadowRoot.querySelector("task-card");
    if (task == null) {
      throw new Error("Task not found");
    }
    const removeButton = task.shadowRoot.querySelector("#remove-button");
    if (removeButton == null) {
      throw new Error("Task remove button not found");
    }
    removeButton.click();
    await awaitFrames(15);
    const entry = await getLastHistoryEntry();
    await expect(entry).toBeDefined();
    const { targetId, targetType } = getHistoryEntryTypeAndId(entry);
    await expect(dynamicProperties.targetTaskId).toBe(targetId);
    await expect(targetType).toBe("DELETE");
  },
  "should undo create board": async () => {
  },
  "should undo update board": async () => {
  },
  "should undo delete board": async () => {
  },
  "should undo create list": async () => {
  },
  "should undo update list": async () => {
  },
  "should undo delete list": async () => {
  },
  "should undo create task": async () => {
  },
  "should undo update task": async () => {
  },
  "should undo delete task": async () => {
  },
  "should highlight current entry": async () => {
  },
  "should remember current entry after page refresh": async () => {
  },
  "should clear history": async () => {
  },
  "should respect history length setting": async () => {
  },
  "should remove entries when history length is set to less than current number or entries": async () => {
  }
};
export {
  history_tests_default as default
};
