declare const _default: {
    'should log create board to action history': () => Promise<void>;
    'should log update board to action history': () => Promise<void>;
    'should log delete board to action history': () => Promise<void>;
    'should log create list to action history': () => Promise<void>;
    'should log update list to action history': () => Promise<void>;
    'should log delete list to action history': () => Promise<void>;
    'should log create task to action history': () => Promise<void>;
    'should log update task to action history': () => Promise<void>;
    'should log delete task to action history': () => Promise<void>;
    'should undo create board': () => Promise<void>;
    'should undo update board': () => Promise<void>;
    'should undo delete board': () => Promise<void>;
    'should undo create list': () => Promise<void>;
    'should undo update list': () => Promise<void>;
    'should undo delete list': () => Promise<void>;
    'should undo create task': () => Promise<void>;
    'should undo update task': () => Promise<void>;
    'should undo delete task': () => Promise<void>;
    'should highlight current entry': () => Promise<void>;
    'should remember current entry after page refresh': () => Promise<void>;
    'should clear history': () => Promise<void>;
    'should respect history length setting': () => Promise<void>;
    'should remove entries when history length is set to less than current number or entries': () => Promise<void>;
};

export { _default as default };
