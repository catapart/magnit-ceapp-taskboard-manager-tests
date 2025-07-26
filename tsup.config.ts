import { defineConfig } from 'tsup';
export default defineConfig({
    loader:{
        '.html': 'text',
        '.css': 'text'
    },
    noExternal: [/(.*)/],
    // external: ['@magnit-ce/code-tests'],
    // splitting: false
    outDir: 'wwwroot/dist'
})