import { TaskboardManagerElement } from "./taskboard-manager.element";

let database: IDBDatabase|undefined;

let initialized: boolean = false;
export function initResources()
{
    if(initialized == true) { return; }

    const request = indexedDB.open('TaskManager', 1);
    request.onsuccess = (event: Event) =>
    {
        const dbEvent = event.target as unknown as { result: IDBDatabase|undefined };
        database = dbEvent.result;
    };
    initialized = true;
}

export async function getAllAppData()
{
    const appData = {
        actionHistoryEntries: await getAllData('actionHistoryEntries'),
        boards: await getAllData('boards'),
        customImages: await getAllData('customImages'),
        keyValue: await getAllData('keyValue'),
        taskSettings: await getAllData('taskSettings'),
        tasklists: await getAllData('tasklists'),
        tasks: await getAllData('tasks'),
    }
    return appData;
}
export async function getAllData<T extends any = undefined>(storeName: string): Promise<(T|null)[]>
{
    if(database == null) { throw new Error("The database has not been opened."); }
    const transaction = database.transaction([storeName], 'readonly');
    transaction.onerror = (event: Event) => { throw event; }
    const value = await new Promise<(T|null)[]>((resolve, reject) =>
    {
        const objectStore = transaction.objectStore(storeName);
        const request = objectStore.getAll();
        request.onsuccess = (event: Event) =>
        {
            const items = (event.target as unknown as { result: { value: T }[] }).result;
            const result = items == null ? [] : items.map(item => item.value);
            resolve(result);
        }
        request.onerror = (event: Event) => { reject(event); }
    });
    return value;
}
// export async function getDataValues(storeName: string, keys: string[]):  Promise<any[]>
// {
//     if(database == null) { return []; }

//     const transaction = database.transaction([storeName], 'readonly');
//     const promises: Promise<any>[] = [];
//     for(let i = 0; i < keys.length; i++)
//     {
//         const id = keys[i];
//         promises.push(new Promise<any>((resolve, reject) =>
//         {
//             const objectStore = transaction.objectStore(storeName);
//             const request = objectStore.get(id);
//             request.onsuccess = (event: Event) =>
//             {
//                 const record = (event.target as unknown as { result: { value: any } }).result;
//                 resolve(record == null ? null : record.value);
//             }
//             request.onerror = (event: Event) => { reject(event); }
//         }));
//     }

//     const records = await Promise.all(promises);
//     return records;
// }


const target = document.querySelector<TaskboardManagerElement>('taskboard-manager')!;
// const appMenu = target.shadowRoot!.querySelector('app-menu')!;
const configPanel = target.shadowRoot!.querySelector<HTMLElement>('config-panel')!;
// const historyPanel = configPanel.shadowRoot!.querySelector('history-panel')!;
// const boardSettingsPanel = target.shadowRoot!.querySelector('board-settings')!;

export const staticProperties: {
    target: HTMLElement,
    appMenu: HTMLElement,
    configPanel: HTMLElement,
    historyPanel: HTMLElement,
    boardSettingsPanel: HTMLElement,
} = {
    target,
    appMenu: target.shadowRoot!.querySelector('app-menu')!,
    configPanel,
    historyPanel: configPanel.shadowRoot!.querySelector('history-panel')!,
    boardSettingsPanel: target.shadowRoot!.querySelector('board-settings')!,
}

export const dynamicProperties: { 
    targetBoardId?: string,
    targetListId?: string,
    targetTaskId?: string,
} = {
    targetBoardId: undefined,
    targetListId: undefined,
    targetTaskId: undefined,
}

export async function initializeTargetBoard(refresh: boolean = false)
{
    if(dynamicProperties.targetBoardId != null && refresh == false)
    {
        return;
    }

    await target.clearData(false);
    const newBoardButton = staticProperties.appMenu.shadowRoot!.querySelector<HTMLButtonElement>('.new-board-button')!;
    newBoardButton.click();

    dynamicProperties.targetBoardId = await new Promise<string>(async (resolve, reject) =>
    {
        await new Promise((done) => setTimeout(done, 300));
        const boardElement = staticProperties.appMenu.shadowRoot!.querySelector<HTMLElement>('.board');
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
export async function initializeTargetList(refresh: boolean = false)
{
    if(dynamicProperties.targetListId != null && refresh == false)
    {
        return;
    }
    await initializeTargetBoard();

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

    const addListButton = staticProperties.boardSettingsPanel.shadowRoot!.querySelector<HTMLButtonElement>('#add-list-button');
    if(addListButton == null)
    {
        throw new Error('Add List button not found');
    }
    addListButton.click();
    // await new Promise(resolve => setTimeout(resolve, 300));

    await awaitFrames();

    const confirmButton = staticProperties.boardSettingsPanel.shadowRoot!.querySelector<HTMLButtonElement>('#board-settings-save');
    if(confirmButton == null)
    {
        throw new Error('Confirm button not found');
    }
    confirmButton.click();
    // await new Promise(resolve => setTimeout(resolve, 300));


    await awaitFrames(15);
    const lists = [...target.shadowRoot!.querySelectorAll<HTMLElement>('task-list')];
    const list = lists.pop();
    dynamicProperties.targetListId = list?.getAttribute('data-tasklist-id') ?? undefined;
}
export async function initializeTargetTask(refresh: boolean = false)
{
    if(dynamicProperties.targetTaskId != null && refresh == false)
    {
        return;
    }
    await initializeTargetBoard();

    // open board
    const boardElement = staticProperties.appMenu.shadowRoot!.querySelector<HTMLElement>('.board');
    if(boardElement == null)
    {
        throw new Error('Board not found');
    }
    boardElement.click();
    
    await awaitFrames();

    // add task
    const addTaskButton = target.shadowRoot!.querySelector<HTMLButtonElement>('.add-task-button');
    if(addTaskButton == null)
    {
        throw new Error('Add Task button not found');
    }
    addTaskButton.click();
    
    await awaitFrames(15);

    const task = target.shadowRoot!.querySelector<HTMLElement>('task-card');
    if(task == null)
    {
        throw new Error('Task not found');
    }

    dynamicProperties.targetTaskId = task.dataset.taskId;
}

export async function awaitFrames(framesToAwait: number = 1)
{
    let framesAwaited = 0;
    return new Promise<void>(resolve =>
    {
        const requestCallback = () => 
        {
            framesAwaited++;
            if(framesAwaited < framesToAwait)
            {
                requestAnimationFrame(requestCallback);
                return;
            }
            resolve();
            // console.log(framesAwaited);
        }
        
        requestAnimationFrame(requestCallback);
    });
}