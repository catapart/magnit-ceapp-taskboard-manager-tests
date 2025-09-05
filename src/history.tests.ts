import { expect } from '@magnit-ce/test-runner';
import { TaskboardManagerElement } from './taskboard-manager.element';

const target = document.querySelector<TaskboardManagerElement>('taskboard-manager')!;
const appMenu = target.shadowRoot!.querySelector('app-menu')!;
const configPanel = target.shadowRoot!.querySelector('config-panel')!;
const historyPanel = configPanel.shadowRoot!.querySelector('history-panel')!;
const boardSettingsPanel = target.shadowRoot!.querySelector('board-settings')!;

const dynamicProperties: { 
    targetBoardId?: string,
} = {
    targetBoardId: undefined,
}

async function initializeBoard()
{
    await target.clearData(false);
    const newBoardButton = appMenu.shadowRoot!.querySelector<HTMLButtonElement>('.new-board-button')!;
    newBoardButton.click();

    dynamicProperties.targetBoardId = await new Promise<string>(async (resolve, reject) =>
    {
        await new Promise((done) => setTimeout(done, 300));
        const boardElement = appMenu.shadowRoot!.querySelector<HTMLElement>('.board');
        if(boardElement == null)
        {
            reject();
            return;
        }
        const route = boardElement.dataset.route;
        if(route == null)
        {
            reject();
            return;
        }

        resolve(route.substring(6));
    });
}

export default {
    'should log create board to action history': async () =>
    {
        try
        {
            await initializeBoard();

            const openSettingsButton = appMenu.shadowRoot!.querySelector<HTMLButtonElement>('#open-settings-button')!;
            // const dataNavItem = configPanel.shadowRoot!.querySelector<HTMLAnchorElement>('#data-nav-item')!;
            const historyNavItem = configPanel.shadowRoot!.querySelector<HTMLAnchorElement>('#history-nav-item')!;

            openSettingsButton.click();
            historyNavItem.click();

            const entry = historyPanel.shadowRoot!.querySelector<HTMLElement>(`[data-entry]`)!;

            await expect(entry).toBeDefined();

            const targetIdElement = entry.querySelector('.target-id')!;
            await expect(targetIdElement).toBeDefined();

            const targetId = targetIdElement.textContent;
            await expect(dynamicProperties.targetBoardId).toBe(targetId);
        }
        finally
        {
            const closeButton = configPanel.shadowRoot!.querySelector<HTMLAnchorElement>('#config-cancel')!;
            closeButton.click();
        }
    },
    'should log update board to action history': async () =>
    {
        if(dynamicProperties.targetBoardId == null)
        {
            await initializeBoard();
        }

        // edit board
        const boardElement = appMenu.shadowRoot!.querySelector<HTMLElement>('.board');
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

        const boardNameInput = boardSettingsPanel.shadowRoot!.querySelector<HTMLInputElement>('#board-name');
        if(boardNameInput == null)
        {
            throw new Error('Board name input not found');
        }
        boardNameInput.value = "Test board name";

        const saveButton = boardSettingsPanel.shadowRoot!.querySelector<HTMLButtonElement>('.action-button.ok');
        if(saveButton == null)
        {
            throw new Error('Save button not found');
        }
        saveButton.click();
        await new Promise(resolve => setTimeout(resolve, 300));


        // check config
        const openSettingsButton = appMenu.shadowRoot!.querySelector<HTMLButtonElement>('#open-settings-button')!;
        // const dataNavItem = configPanel.shadowRoot!.querySelector<HTMLAnchorElement>('#data-nav-item')!;
        const historyNavItem = configPanel.shadowRoot!.querySelector<HTMLAnchorElement>('#history-nav-item')!;

        openSettingsButton.click();
        historyNavItem.click();

        const entries = historyPanel.shadowRoot!.querySelectorAll<HTMLElement>(`[data-entry]`)!;
        console.log(entries);
        const entry = entries[entries.length - 1];

        await expect(entry).toBeDefined();

        const targetIdElement = entry.querySelector('.target-id')!;
        await expect(targetIdElement).toBeDefined();

        const targetId = targetIdElement.textContent;

        console.log(targetId, dynamicProperties.targetBoardId);
        await expect(dynamicProperties.targetBoardId).toBe(targetId);
    },
    'should log delete board to action history': async () =>
    {
    },

    'should log create task to action history': async () =>
    {
    },
    'should log update task to action history': async () =>
    {
    },
    'should log delete task to action history': async () =>
    {
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