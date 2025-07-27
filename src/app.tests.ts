import { expect } from '@magnit-ce/code-tests';

const manager = document.querySelector('taskboard-manager')!;

export default {
    'should show welcome on first start': async () =>
    {
        const welcomePageAttribute = manager.shadowRoot!.querySelector('#welcome-page')?.getAttribute('aria-current');
        await expect(welcomePageAttribute).toBe('page');
    },
    'should show placeholder for boards list': async () =>
    {
    },
    'should show placeholder for recent boards list': async () =>
    {
    },
    'should create and open new board from welcome new board button': async () =>
    {
    },
    'should create and open new board from app menu new board button': async () =>
    {
    },
    'should open edit board dialog from edit board button': async () =>
    {
    },
    'should open find board dialog from find board button': async () =>
    {
    },
    'should open config dialog from config button': async () =>
    {
    },
}