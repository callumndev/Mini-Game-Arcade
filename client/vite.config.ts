import { defineConfig } from 'vite'

import path from 'path'
import preact from '@preact/preset-vite'


const clientRoot = path.join(__dirname);
const clientSrc = path.join(clientRoot, "src");

// https://vitejs.dev/config/
export default defineConfig({
    // Array of plugins to use
    plugins: [preact()],

    // Resolve options
    resolve: {
        // Import alias
        alias: {
            "@": clientSrc,
            "@assets": path.join(clientSrc, "assets"),
            "@pages": path.join(clientSrc, "pages"),
            "@components": path.join(clientSrc, "components"),
        },
    },
})
