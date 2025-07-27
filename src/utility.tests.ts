import { BEFOREALL, expect } from '@magnit-ce/code-tests';
import { TaskboardManagerElement } from './taskboard-manager.element';
import { getAllAppData, initResources } from './resources';

const manager = document.querySelector<TaskboardManagerElement>('taskboard-manager')!;

export default {
    BEFOREALL: async () =>
    {
        await initResources();
    },
    'should reset app': async () =>
    {
        await manager.clearData();
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