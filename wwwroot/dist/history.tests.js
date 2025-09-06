import {
  expect
} from "./chunk-EBJVJICN.js";

// src/history.tests.ts
var target = document.querySelector("taskboard-manager");
var appMenu = target.shadowRoot.querySelector("app-menu");
var configPanel = target.shadowRoot.querySelector("config-panel");
var historyPanel = configPanel.shadowRoot.querySelector("history-panel");
var boardSettingsPanel = target.shadowRoot.querySelector("board-settings");
var dynamicProperties = {
  targetBoardId: void 0
};
async function initializeBoard() {
  await target.clearData(false);
  const newBoardButton = appMenu.shadowRoot.querySelector(".new-board-button");
  newBoardButton.click();
  dynamicProperties.targetBoardId = await new Promise(async (resolve, reject) => {
    await new Promise((done) => setTimeout(done, 300));
    const boardElement = appMenu.shadowRoot.querySelector(".board");
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
function getLastHistoryEntry() {
  const openSettingsButton = appMenu.shadowRoot.querySelector("#open-settings-button");
  const historyNavItem = configPanel.shadowRoot.querySelector("#history-nav-item");
  openSettingsButton.click();
  historyNavItem.click();
  const entries = historyPanel.shadowRoot.querySelectorAll(`[data-entry]`);
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
      await initializeBoard();
      const entry = getLastHistoryEntry();
      await expect(entry).toBeDefined();
      const targetIdElement = entry.querySelector(".target-id");
      await expect(targetIdElement).toBeDefined();
      const targetId = targetIdElement.textContent;
      await expect(dynamicProperties.targetBoardId).toBe(targetId);
    } finally {
      const closeButton = configPanel.shadowRoot.querySelector("#config-cancel");
      closeButton.click();
    }
  },
  "should log update board to action history": async () => {
    if (dynamicProperties.targetBoardId == null) {
      await initializeBoard();
    }
    const boardElement = appMenu.shadowRoot.querySelector(".board");
    if (boardElement == null) {
      throw new Error("Board not found");
    }
    const editButton = boardElement.querySelector(".edit");
    if (editButton == null) {
      throw new Error("Edit button not found");
    }
    editButton.click();
    await new Promise((resolve) => setTimeout(resolve, 300));
    const boardNameInput = boardSettingsPanel.shadowRoot.querySelector("#board-name");
    if (boardNameInput == null) {
      throw new Error("Board name input not found");
    }
    boardNameInput.value = "Test board name";
    const saveButton = boardSettingsPanel.shadowRoot.querySelector(".action-button.ok");
    if (saveButton == null) {
      throw new Error("Save button not found");
    }
    saveButton.click();
    await new Promise((resolve) => setTimeout(resolve, 300));
    const entry = getLastHistoryEntry();
    await expect(entry).toBeDefined();
    const { targetId, targetType } = getHistoryEntryTypeAndId(entry);
    await expect(dynamicProperties.targetBoardId).toBe(targetId);
    await expect(targetType).toBe("UPDATE");
  },
  "should log delete board to action history": async () => {
    if (dynamicProperties.targetBoardId == null) {
      await initializeBoard();
    }
    const boardElement = appMenu.shadowRoot.querySelector(".board");
    if (boardElement == null) {
      throw new Error("Board not found");
    }
    const editButton = boardElement.querySelector(".edit");
    if (editButton == null) {
      throw new Error("Edit button not found");
    }
    editButton.click();
    await new Promise((resolve) => setTimeout(resolve, 300));
    const deleteButton = boardSettingsPanel.shadowRoot.querySelector("#remove-board-button");
    if (deleteButton == null) {
      throw new Error("Delete button not found");
    }
    deleteButton.click();
    await new Promise((resolve) => setTimeout(resolve, 300));
    const confirmButton = target.shadowRoot.querySelector("#confirmation-confirm-button");
    if (confirmButton == null) {
      throw new Error("Confirm button not found");
    }
    confirmButton.click();
    await new Promise((resolve) => setTimeout(resolve, 300));
    const entry = getLastHistoryEntry();
    await expect(entry).toBeDefined();
    const { targetId, targetType } = getHistoryEntryTypeAndId(entry);
    await expect(dynamicProperties.targetBoardId).toBe(targetId);
    await expect(targetType).toBe("DELETE");
  },
  "should log create list to action history": async () => {
  },
  "should log update list to action history": async () => {
  },
  "should log delete list to action history": async () => {
  },
  "should log create task to action history": async () => {
  },
  "should log update task to action history": async () => {
  },
  "should log delete task to action history": async () => {
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
