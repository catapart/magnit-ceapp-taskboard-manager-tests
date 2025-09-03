import {
  HookType,
  expect
} from "./chunk-EBJVJICN.js";
import {
  getAllAppData,
  initResources
} from "./chunk-Y2HPBQSX.js";

// src/utility.tests.ts
var manager = document.querySelector("taskboard-manager");
var utility_tests_default = {
  [HookType.RequiredBeforeAny]: async () => {
    await initResources();
  },
  "should reset app": async () => {
    await manager.clearData(false);
    const appData = await getAllAppData();
    console.log(appData);
    await expect(appData).toBeDefined();
    await expect(appData.actionHistoryEntries.length).toBe(0);
    await expect(appData.boards.length).toBe(0);
    await expect(appData.customImages.length).toBe(0);
    await expect(appData.keyValue.length).toBe(0);
    await expect(appData.taskSettings.length).toBe(0);
    await expect(appData.tasklists.length).toBe(0);
    await expect(appData.tasks.length).toBe(0);
  }
};
export {
  utility_tests_default as default
};
