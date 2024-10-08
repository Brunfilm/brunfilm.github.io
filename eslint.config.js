import pluginJs from "@eslint/js";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import jsdoc from "eslint-plugin-jsdoc";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";

export default [
    {
        languageOptions: {
            globals: globals.browser,
        },
    },
    pluginJs.configs.recommended,
    {
        files: ["**/*.md"],
        plugins: {
            markdown,
        },
        processor: "markdown/markdown",
        language: "markdown/gfm",
    },
    {
        files: ["**/*.json"],
        plugins: {
            json,
        },
        ignores: ["package-lock.json"],
        language: "json/json",
        ...json.configs.recommended,
    },
    {
        files: ["**/*.jsonc", ".vscode/*.json"],
        language: "json/jsonc",
        ...json.configs.recommended,
    },
    {
        files: ["**/*.json5"],
        language: "json/json5",
        rules: {
            "json/no-duplicate-keys": "error",
        },
        ...json.configs.recommended,
    },
    {
        files: ["**/*.js"],
        plugins: {
            jsdoc,
        },
    },
    {
        files: ["**/*.js"],
        rules: js.configs.recommended.rules,
    },
    eslintPluginPrettierRecommended,
];
