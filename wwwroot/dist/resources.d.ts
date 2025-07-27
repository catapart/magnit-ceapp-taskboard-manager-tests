declare function initResources(): void;
declare function getAllAppData(): Promise<{
    actionHistoryEntries: (null | undefined)[];
    boards: (null | undefined)[];
    customImages: (null | undefined)[];
    keyValue: (null | undefined)[];
    taskSettings: (null | undefined)[];
    tasklists: (null | undefined)[];
    tasks: (null | undefined)[];
}>;
declare function getAllData<T extends any = undefined>(storeName: string): Promise<(T | null)[]>;

export { getAllAppData, getAllData, initResources };
