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
declare const staticProperties: {
    target: HTMLElement;
    appMenu: HTMLElement;
    configPanel: HTMLElement;
    historyPanel: HTMLElement;
    boardSettingsPanel: HTMLElement;
};
declare const dynamicProperties: {
    targetBoardId?: string;
    targetListId?: string;
    targetTaskId?: string;
};
declare function initializeTargetBoard(refresh?: boolean): Promise<void>;
declare function initializeTargetList(refresh?: boolean): Promise<void>;
declare function initializeTargetTask(refresh?: boolean): Promise<void>;
declare function awaitFrames(framesToAwait?: number): Promise<void>;

export { awaitFrames, dynamicProperties, getAllAppData, getAllData, initResources, initializeTargetBoard, initializeTargetList, initializeTargetTask, staticProperties };
