import * as autoprefixer from "autoprefixer"
import { resolve } from "path"
import eslintPlugin from "vite-plugin-eslint"

export default {
    resolve: {
        alias: {
            "@": resolve(__dirname, "./"),
            "@/*": resolve(__dirname, "./src/.vitepress/*"),
        },
    },
    plugins: [
        eslintPlugin({
            include: ["./src/**/*.vue", "./src/**/*.tsx", "./src/**/*.ts"],
            exclude: ["./node_modules/**", "./src/.vitepress/dist", "./src/.vitepress/cache"],
            cache: false,
            emitWarning: false,
        }),
    ],

    build: {
        target: "ESNext",
        cssCodeSplit: false,
        minify: "terser",
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
        chunkSizeWarningLimit: 500,
        rollupOptions: {
            output: {
                chunkFileNames: "assets/chunks/[name]-[hash].js",
                assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
                manualChunks(id: string) {
                    if (id.includes("node_modules")) {
                        return id.toString().split("node_modules/")[1].split("/")[0].toString()
                    }
                },
            },
        },
    },
    css: {
        postcss: {
            plugins: [autoprefixer],
        },
    },
}
