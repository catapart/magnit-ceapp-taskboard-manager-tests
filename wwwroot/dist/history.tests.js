import {
  expect
} from "./chunk-EBJVJICN.js";

// src/history.tests.ts
var target = document.querySelector("taskboard-manager");
var appMenu = target.shadowRoot.querySelector("app-menu");
var configPanel = target.shadowRoot.querySelector("config-panel");
var historyPanel = configPanel.shadowRoot.querySelector("history-panel");
var history_tests_default = {
  "should log create board to action history": async () => {
    try {
      await target.clearData(false);
      const newBoardButton = appMenu.shadowRoot.querySelector(".new-board-button");
      const openSettingsButton = appMenu.shadowRoot.querySelector("#open-settings-button");
      const historyNavItem = configPanel.shadowRoot.querySelector("#history-nav-item");
      console.log(newBoardButton);
      newBoardButton.click();
      const boardId = await new Promise(async (resolve, reject) => {
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
      openSettingsButton.click();
      historyNavItem.click();
      const entry = historyPanel.shadowRoot.querySelector(`[data-entry]`);
      await expect(entry).toBeDefined();
      const targetIdElement = entry.querySelector(".target-id");
      await expect(targetIdElement).toBeDefined();
      const targetId = targetIdElement.textContent;
      await expect(boardId).toBe(targetId);
    } finally {
      target.setAttribute("path", "");
    }
  },
  "should log update board to action history": async () => {
  },
  "should log delete board to action history": async () => {
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
