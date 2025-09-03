import { HookType, expect } from '@magnit-ce/test-runner';
import { TaskboardManagerElement } from './taskboard-manager.element';
import { getAllAppData, initResources } from './resources';

const manager = document.querySelector<TaskboardManagerElement>('taskboard-manager')!;

export default {
    [HookType.RequiredBeforeAny]: async () =>
    {
        await initResources();
    },
    'should reset app': async () =>
    {
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
    },
}