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