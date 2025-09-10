import { expect } from '@magnit-ce/test-runner';
import { TaskboardManagerElement } from './taskboard-manager.element';
import { awaitFrames, dynamicProperties, initializeTargetBoard, initializeTargetList, initializeTargetTask, staticProperties } from './resources';

// const target = document.querySelector<TaskboardManagerElement>('taskboard-manager')!;
// const appMenu = target.shadowRoot!.querySelector('app-menu')!;
// const configPanel = target.shadowRoot!.querySelector('config-panel')!;
// const historyPanel = configPanel.shadowRoot!.querySelector('history-panel')!;
// const boardSettingsPanel = target.shadowRoot!.querySelector('board-settings')!;

// const dynamicProperties: { 
//     targetBoardId?: string,
//     targetListId?: string,
//     targetTaskId?: string,
// } = {
//     targetBoardId: undefined,
//     targetListId: undefined,
//     targetTaskId: undefined,
// }


// async function initializeTargetBoard()
// {
//     await target.clearData(false);
//     const newBoardButton = appMenu.shadowRoot!.querySelector<HTMLButtonElement>('.new-board-button')!;
//     newBoardButton.click();

//     dynamicProperties.targetBoardId = await new Promise<string>(async (resolve, reject) =>
//     {
//         await new Promise((done) => setTimeout(done, 300));
//         const boardElement = appMenu.shadowRoot!.querySelector<HTMLElement>('.board');
//         if(boardElement == null)
//         {
//             reject();
//             return;
//         }
//         const route = boardElement.dataset.route;
//         if(route == null)
//         {
//             reject();
//             return;
//         }

//         resolve(route.substring(6));
//     });
// }
// async function initializeTargetList()
// {
//     if(dynamicProperties.targetBoardId == null)
//     {
//         await initializeTargetBoard();
//     }

//     // edit board
//     const boardElement = appMenu.shadowRoot!.querySelector<HTMLElement>('.board');
//     if(boardElement == null)
//     {
//         throw new Error('Board not found');
//     }
    
//     const editButton = boardElement.querySelector<HTMLButtonElement>('.edit');
//     if(editButton == null)
//     {
//         throw new Error('Edit button not found');
//     }
//     editButton.click();
//     await new Promise(resolve => setTimeout(resolve, 300));

//     const addListButton = boardSettingsPanel.shadowRoot!.querySelector<HTMLButtonElement>('#add-list-button');
//     if(addListButton == null)
//     {
//         throw new Error('Add List button not found');
//     }
//     addListButton.click();
//     // await new Promise(resolve => setTimeout(resolve, 300));

//     await awaitFrames();

//     const confirmButton = boardSettingsPanel.shadowRoot!.querySelector<HTMLButtonElement>('#board-settings-save');
//     if(confirmButton == null)
//     {
//         throw new Error('Confirm button not found');
//     }
//     confirmButton.click();
//     // await new Promise(resolve => setTimeout(resolve, 300));


//     await awaitFrames(15);
//     const lists = [...target.shadowRoot!.querySelectorAll<HTMLElement>('task-list')];
//     const list = lists.pop();
//     dynamicProperties.targetListId = list?.getAttribute('data-tasklist-id') ?? undefined;
// }
// async function initializeTargetTask()
// {
//     if(dynamicProperties.targetBoardId == null)
//     {
//         await initializeTargetBoard();
//     }

//     // open board
//     const boardElement = appMenu.shadowRoot!.querySelector<HTMLElement>('.board');
//     if(boardElement == null)
//     {
//         throw new Error('Board not found');
//     }
//     boardElement.click();
    
//     await awaitFrames();

//     // add task
//     const addTaskButton = target.shadowRoot!.querySelector<HTMLButtonElement>('.add-task-button');
//     if(addTaskButton == null)
//     {
//         throw new Error('Add Task button not found');
//     }
//     addTaskButton.click();
    
//     await awaitFrames(15);

//     const task = target.shadowRoot!.querySelector<HTMLElement>('task-card');
//     if(task == null)
//     {
//         throw new Error('Task not found');
//     }

//     dynamicProperties.targetTaskId = task.dataset.taskId;
// }

// async function awaitFrames(framesToAwait: number = 1)
// {
//     let framesAwaited = 0;
//     return new Promise<void>(resolve =>
//     {
//         const requestCallback = () => 
//         {
//             framesAwaited++;
//             if(framesAwaited < framesToAwait)
//             {
//                 requestAnimationFrame(requestCallback);
//                 return;
//             }
//             resolve();
//             // console.log(framesAwaited);
//         }
        
//         requestAnimationFrame(requestCallback);
//     });
// }

async function getLastHistoryEntry(framesToAwait: number = 1)
{
    await awaitFrames(framesToAwait);

    const openSettingsButton = staticProperties.appMenu.shadowRoot!.querySelector<HTMLButtonElement>('#open-settings-button')!;
    // const dataNavItem = configPanel.shadowRoot!.querySelector<HTMLAnchorElement>('#data-nav-item')!;
    const historyNavItem = staticProperties.configPanel.shadowRoot!.querySelector<HTMLAnchorElement>('#history-nav-item')!;

    openSettingsButton.click();
    historyNavItem.click();

    const entries = staticProperties.historyPanel.shadowRoot!.querySelectorAll<HTMLElement>(`[data-entry]`)!;
    const entry = entries[entries.length - 1];
    return entry;
}
function getHistoryEntryTypeAndId(entry: HTMLElement)
{
    const targetIdElement = entry.querySelector('.target-id')!;        
    const targetTypeElement = entry.querySelector('.action-type')!;

    const targetId = targetIdElement.textContent;
    const targetType = targetTypeElement.textContent;

    return { targetId, targetType };
}

export default {
    'should log create board to action history': async () =>
    {
        try
        {
            await initializeTargetBoard();

            const entry = await getLastHistoryEntry();

            await expect(entry).toBeDefined();

            const targetIdElement = entry.querySelector('.target-id')!;
            await expect(targetIdElement).toBeDefined();

            const targetId = targetIdElement.textContent;
            await expect(dynamicProperties.targetBoardId).toBe(targetId);
        }
        finally
        {
            const closeButton = staticProperties.configPanel.shadowRoot!.querySelector<HTMLAnchorElement>('#config-cancel')!;
            closeButton.click();
        }
    },
    'should log update board to action history': async () =>
    {
        if(dynamicProperties.targetBoardId == null)
        {
            await initializeTargetBoard();
        }

        // edit board
        const boardElement = staticProperties.appMenu.shadowRoot!.querySelector<HTMLElement>('.board');
        if(boardElement == null)
        {
            throw new Error('Board not found');
        }
        
        const editButton = boardElement.querySelector<HTMLButtonElement>('.edit');
        if(editButton == null)
        {
            throw new Error('Edit button not found');
        }
        editButton.click();
        await new Promise(resolve => setTimeout(resolve, 300));

        const boardNameInput = staticProperties.boardSettingsPanel.shadowRoot!.querySelector<HTMLInputElement>('#board-name');
        if(boardNameInput == null)
        {
            throw new Error('Board name input not found');
        }
        boardNameInput.value = "Test board name";

        const saveButton = staticProperties.boardSettingsPanel.shadowRoot!.querySelector<HTMLButtonElement>('.action-button.ok');
        if(saveButton == null)
        {
            throw new Error('Save button not found');
        }
        saveButton.click();
        await new Promise(resolve => setTimeout(resolve, 1000));


        // check history
        const entry = await getLastHistoryEntry();
        await expect(entry).toBeDefined();

        const { targetId, targetType } = getHistoryEntryTypeAndId(entry);
        await expect(dynamicProperties.targetBoardId).toBe(targetId);
        await expect(targetType).toBe('UPDATE');
    },
    'should log delete board to action history': async () =>
    {
        await initializeTargetBoard();

        // delete board
        const boardElement = staticProperties.appMenu.shadowRoot!.querySelector<HTMLElement>('.board');
        if(boardElement == null)
        {
            throw new Error('Board not found');
        }
        
        const editButton = boardElement.querySelector<HTMLButtonElement>('.edit');
        if(editButton == null)
        {
            throw new Error('Edit button not found');
        }
        editButton.click();
        await new Promise(resolve => setTimeout(resolve, 300));

        const deleteButton = staticProperties.boardSettingsPanel.shadowRoot!.querySelector<HTMLButtonElement>('#remove-board-button');
        if(deleteButton == null)
        {
            throw new Error('Delete button not found');
        }
        deleteButton.click();
        await new Promise(resolve => setTimeout(resolve, 300));

        const confirmButton = staticProperties.target.shadowRoot!.querySelector<HTMLButtonElement>('#confirmation-confirm-button');
        if(confirmButton == null)
        {
            throw new Error('Confirm button not found');
        }
        confirmButton.click();
        await new Promise(resolve => setTimeout(resolve, 300));


        // check history
        const entry = await getLastHistoryEntry();
        await expect(entry).toBeDefined();

        const { targetId, targetType } = getHistoryEntryTypeAndId(entry);
        await expect(dynamicProperties.targetBoardId).toBe(targetId);
        await expect(targetType).toBe('DELETE');
    },

    'should log create list to action history': async () =>
    {
        await initializeTargetList();

        // check history
        const entry = await getLastHistoryEntry();
        await expect(entry).toBeDefined();

        const { targetId, targetType } = getHistoryEntryTypeAndId(entry);
        await expect(dynamicProperties.targetListId).toBe(targetId);
        await expect(targetType).toBe('CREATE');
    },
    'should log update list to action history': async () =>
    {
        await initializeTargetList();

        // edit list
        const boardElement = staticProperties.appMenu.shadowRoot!.querySelector<HTMLElement>('.board');
        if(boardElement == null)
        {
            throw new Error('Board not found');
        }
        
        const editButton = boardElement.querySelector<HTMLButtonElement>('.edit');
        if(editButton == null)
        {
            throw new Error('Edit button not found');
        }
        editButton.click();
        await awaitFrames();

        const listSettings = staticProperties.target.shadowRoot!.querySelector(`[tasklist-record-id="${dynamicProperties.targetListId}"]`);
        if(listSettings == null)
        {
            throw new Error('List settings not found');
        }

        const listNameInput = listSettings.shadowRoot!.querySelector<HTMLInputElement>('.input.name');
        if(listNameInput == null)
        {
            throw new Error('List name input not found');
        }
        listNameInput.value = "Test list name";

        const saveButton = staticProperties.boardSettingsPanel.shadowRoot!.querySelector<HTMLButtonElement>('.action-button.ok');
        if(saveButton == null)
        {
            throw new Error('Save button not found');
        }
        saveButton.click();
        await new Promise(resolve => setTimeout(resolve, 1000));


        // check history
        const entry = await getLastHistoryEntry();
        await expect(entry).toBeDefined();

        const { targetId, targetType } = getHistoryEntryTypeAndId(entry);
        await expect(dynamicProperties.targetListId).toBe(targetId);
        await expect(targetType).toBe('UPDATE');
    },
    'should log delete list to action history': async () =>
    {
        await initializeTargetList();

        // delete list
        const boardElement = staticProperties.appMenu.shadowRoot!.querySelector<HTMLElement>('.board');
        if(boardElement == null)
        {
            throw new Error('Board not found');
        }
        
        const editButton = boardElement.querySelector<HTMLButtonElement>('.edit');
        if(editButton == null)
        {
            throw new Error('Edit button not found');
        }
        editButton.click();
        await new Promise(resolve => setTimeout(resolve, 300));


        const listSettings = staticProperties.target.shadowRoot!.querySelector(`[tasklist-record-id="${dynamicProperties.targetListId}"]`);
        if(listSettings == null)
        {
            throw new Error('List settings not found');
        }

        const deleteButton = listSettings.shadowRoot!.querySelector<HTMLButtonElement>('#tasklist-settings-remove-button');
        if(deleteButton == null)
        {
            throw new Error('Delete button not found');
        }
        deleteButton.click();
        await new Promise(resolve => setTimeout(resolve, 300));

        const saveButton = staticProperties.boardSettingsPanel.shadowRoot!.querySelector<HTMLButtonElement>('.action-button.ok');
        if(saveButton == null)
        {
            throw new Error('Save button not found');
        }
        saveButton.click();
        await new Promise(resolve => setTimeout(resolve, 1000));


        // check history
        const entry = await getLastHistoryEntry();
        await expect(entry).toBeDefined();

        const { targetId, targetType } = getHistoryEntryTypeAndId(entry);
        await expect(dynamicProperties.targetListId).toBe(targetId);
        await expect(targetType).toBe('DELETE');
    },

    'should log create task to action history': async () =>
    {
        await initializeTargetTask();

        // check history
        const entry = await getLastHistoryEntry();
        await expect(entry).toBeDefined();

        const { targetId, targetType } = getHistoryEntryTypeAndId(entry);
        await expect(dynamicProperties.targetTaskId).toBe(targetId);
        await expect(targetType).toBe('CREATE');
    },
    'should log update task to action history': async () =>
    {
        await initializeTargetTask();

        // edit task
        const task = staticProperties.target.shadowRoot!.querySelector<HTMLElement>('task-card');
        if(task == null)
        {
            throw new Error('Task not found');
        }

        const taskDescription = task.shadowRoot!.querySelector<HTMLInputElement>('#description');
        if(taskDescription == null)
        {
            throw new Error('Task description not found');
        }
        taskDescription.textContent = "Task content";
        taskDescription.blur();

        await awaitFrames();

        // check history
        const entry = await getLastHistoryEntry();
        await expect(entry).toBeDefined();

        const { targetId, targetType } = getHistoryEntryTypeAndId(entry);
        await expect(dynamicProperties.targetTaskId).toBe(targetId);
        await expect(targetType).toBe('UPDATE');
    },
    'should log delete task to action history': async () =>
    {
        await initializeTargetTask();

        // delete task
        const task = staticProperties.target.shadowRoot!.querySelector<HTMLElement>('task-card');
        if(task == null)
        {
            throw new Error('Task not found');
        }

        const removeButton = task.shadowRoot!.querySelector<HTMLInputElement>('#remove-button');
        if(removeButton == null)
        {
            throw new Error('Task remove button not found');
        }
        removeButton.click();

        await awaitFrames(15);

        // check history
        const entry = await getLastHistoryEntry();
        await expect(entry).toBeDefined();

        const { targetId, targetType } = getHistoryEntryTypeAndId(entry);
        await expect(dynamicProperties.targetTaskId).toBe(targetId);
        await expect(targetType).toBe('DELETE');
    },

    'should undo create board': async () =>
    {
    },
    'should undo update board': async () =>
    {
    },
    'should undo delete board': async () =>
    {
    },

    'should undo create list': async () =>
    {
    },
    'should undo update list': async () =>
    {
    },
    'should undo delete list': async () =>
    {
    },

    'should undo create task': async () =>
    {
    },
    'should undo update task': async () =>
    {
    },
    'should undo delete task': async () =>
    {
    },

    'should highlight current entry': async () =>
    {
    },

    'should remember current entry after page refresh': async () =>
    {
    },

    'should clear history': async () =>
    {
    },

    'should respect history length setting': async () =>
    {
    },
    'should remove entries when history length is set to less than current number or entries': async () =>
    {
    },
}