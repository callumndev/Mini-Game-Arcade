import { defineConfig } from 'vite'

import path from 'path'
import react from '@vitejs/plugin-react'


const clientRoot = path.join(__dirname);
const clientSrc = path.join(clientRoot, "src");

// https://vitejs.dev/config/
export default defineConfig({
    // Array of plugins to use
    plugins: [react()],

    // Resolve options
    resolve: {
        // Import alias
        alias: {
            "@": clientSrc,
            "@assets": path.join(clientSrc, "assets"),
            "@pages": path.join(clientSrc, "pages"),
            "@components": path.join(clientSrc, "components"),
            "@state": path.join(clientSrc, "state"),
        },
    },

    // Server options
    server: {
        port: 3000
    },
})
