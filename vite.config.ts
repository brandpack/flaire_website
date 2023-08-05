import { PluginOption, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import Unfonts from 'unplugin-fonts/vite'
// import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
    // base: '/flaire_website',
    plugins: [react(), svgr({
        svgrOptions: {
            // svgr options
        },

    },
    ),
    // visualizer({
    //     template: "treemap", // or sunburst
    //     open: true,
    //     gzipSize: true,
    //     brotliSize: true,
    //     filename: "analyse.html", // will be saved in project's root
    // }) as PluginOption,
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
