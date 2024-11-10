import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts';

export default defineConfig({
        build: {
                cssCodeSplit: true,
                lib: {
                        entry: {
                                index: resolve(__dirname, 'src/qwack.ts'),
                                'themes/light.css': resolve(__dirname, 'src/themes/light.css'),
                                'themes/dark.css': resolve(__dirname, 'src/themes/dark.css')
                        },

                        formats: ['es'],
                        fileName: 'qwack'
                },
                rollupOptions: {
                        external: /^lit/
                }
        },
        plugins: [
                dts({
                        insertTypesEntry: true,
                })
        ]

});
