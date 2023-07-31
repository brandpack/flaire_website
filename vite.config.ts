import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import Unfonts from 'unplugin-fonts/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr({
        svgrOptions: {
            // svgr options
        },
    }),
    Unfonts({
        google: {
            families: [
                'Krona One',
                'Inter',
                'Montserrat'
            ],
        },
    }),],
})
