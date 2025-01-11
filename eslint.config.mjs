// @ts-check
import eslintJs from "@eslint/js";
import eslintJson from "@eslint/json";
import vitestEslintPlugin from "@vitest/eslint-plugin";
import pluginOxlint from "eslint-plugin-oxlint";
import pluginPrettier from "eslint-plugin-prettier/recommended";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import tsEslint from "typescript-eslint";
// import eslintMarkdown from "@eslint/markdown";
// import { pluginChaiFriendly } from "eslint-plugin-chai-friendly";
// import { pluginCypress } from "eslint-plugin-cypress/flat";
// import { pluginMocha } from "eslint-plugin-mocha";

export default tsEslint.config(
    {
        name: "Global include and exclude",
        ignores: ["**/dist/**", "**/cache/**", "**/dist-ssr/**", "**/coverage/**", "**/tests/**", "package-lock.json"],
    },
    // pluginMocha.configs.flat.recommended,
    // pluginCypress.configs.recommended,
    // pluginChaiFriendly.configs.recommendedFlat,
    // eslintMarkdown.configs.recommended,
    {
        name: "Globals",
        languageOptions: {
            globals: globals.browser,
        },
    },
    {
        name: "Vue-Js-Ts/Recommended",
        extends: [
            eslintJs.configs.recommended,
            ...tsEslint.configs.recommendedTypeChecked,
            ...pluginVue.configs["flat/recommended"],
        ],
        files: ["**/*.ts", "**/*.vue", "**/*.js", "**/*.mjs"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.browser,
            parserOptions: {
                parser: tsEslint.parser,
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
                extraFileExtensions: [".vue"],
            },
        },
    },
    {
        name: "Vitest/Recommended",
        ...vitestEslintPlugin.configs.recommended,
        ...vitestEslintPlugin.configs.env,
        files: ["tests/**", "src/**/__tests__/*"],
    },
    // {
    // name: "Cypress/Recommended",
    // pluginCypress.configs.recommended,
    // files: ["cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}", "cypress/support/**/*.{js,ts,jsx,tsx}"],
    // },
    {
        // name: "Oxlint/Recommended",
        ...pluginOxlint.configs["flat/recommended"],
    },
    {
        name: "Json/Recommended",
        files: ["**/*.json"],
        ignores: ["package-lock.json"],
        language: "json/json",
        ...eslintJson.configs.recommended,
    },
    {
        name: "JsonC/Recommended",
        files: ["**/*.jsonc", ".vscode/*.json"],
        language: "json/jsonc",
        ...eslintJson.configs.recommended,
    },
    {
        name: "Json5/Recommended",
        files: ["**/*.json5"],
        language: "json/json5",
        ...eslintJson.configs.recommended,
    },
    {
        name: "Prettier/Recommended",
        ...pluginPrettier,
        // eslintConfigPrettier,
    },
    {
        name: "BrownRules/EnableEslint",
        files: ["**/*.json", "**/*.jsonc", "**/*.json5", "**/*.md"],
        rules: {
            "vue/attribute-hyphenation": "off",
            "vue/attributes-order": "off",
            "vue/component-definition-name-casing": "off",
            "vue/component-tags-order": "off",
            "vue/first-attribute-linebreak": "off",
            "vue/multi-word-component-names": "off",
            "vue/no-async-in-computed-properties": "off",
            "vue/no-child-content": "off",
            "vue/no-deprecated-dollar-listeners-api": "off",
            "vue/no-deprecated-dollar-scopedslots-api": "off",
            "vue/no-deprecated-filter": "off",
            "vue/no-deprecated-html-element-is": "off",
            "vue/no-deprecated-inline-template": "off",
            "vue/no-deprecated-router-link-tag-prop": "off",
            "vue/no-deprecated-scope-attribute": "off",
            "vue/no-deprecated-slot-attribute": "off",
            "vue/no-deprecated-slot-scope-attribute": "off",
            "vue/no-deprecated-v-bind-sync": "off",
            "vue/no-deprecated-v-is": "off",
            "vue/no-deprecated-v-on-native-modifier": "off",
            "vue/no-deprecated-v-on-number-modifiers": "off",
            "vue/no-dupe-keys": "off",
            "vue/no-dupe-v-else-if": "off",
            "vue/no-duplicate-attributes": "off",
            "vue/no-export-in-script-setup": "off",
            "vue/no-expose-after-await": "off",
            "vue/no-lone-template": "off",
            "vue/no-mutating-props": "off",
            "vue/no-reserved-component-names": "off",
            "vue/no-reserved-keys": "off",
            "vue/no-reserved-props": "off",
            "vue/no-side-effects-in-computed-properties": "off",
            "vue/no-template-key": "off",
            "vue/no-template-shadow": "off",
            "vue/no-textarea-mustache": "off",
            "vue/no-unused-components": "off",
            "vue/no-unused-vars": "off",
            "vue/no-use-computed-property-like-method": "off",
            "vue/no-use-v-if-with-v-for": "off",
            "vue/no-useless-template-attributes": "off",
            "vue/no-v-for-template-key-on-child": "off",
            "vue/no-v-html": "off",
            "vue/no-v-text-v-html-on-component": "off",
            "vue/order-in-components": "off",
            "vue/prop-name-casing": "off",
            "vue/require-component-is": "off",
            "vue/require-default-prop": "off",
            "vue/require-explicit-emits": "off",
            "vue/require-prop-type-constructor": "off",
            "vue/require-prop-types": "off",
            "vue/require-toggle-inside-transition": "off",
            "vue/require-v-for-key": "off",
            "vue/require-valid-default-prop": "off",
            "vue/return-in-emits-validator": "off",
            "vue/this-in-template": "off",
            "vue/use-v-on-exact": "off",
            "vue/v-bind-style": "off",
            "vue/v-on-event-hyphenation": "off",
            "vue/v-on-style": "off",
            "vue/v-slot-style": "off",
            "vue/valid-attribute-name": "off",
            "vue/valid-define-emits": "off",
            "vue/valid-define-props": "off",
            "vue/valid-next-tick": "off",
            "vue/valid-template-root": "off",
            "vue/valid-v-bind": "off",
            "vue/valid-v-cloak": "off",
            "vue/valid-v-else-if": "off",
            "vue/valid-v-else": "off",
            "vue/valid-v-for": "off",
            "vue/valid-v-html": "off",
            "vue/valid-v-if": "off",
            "vue/valid-v-is": "off",
            "vue/valid-v-memo": "off",
            "vue/valid-v-model": "off",
            "vue/valid-v-on": "off",
            "vue/valid-v-once": "off",
            "vue/valid-v-pre": "off",
            "vue/valid-v-show": "off",
            "vue/valid-v-slot": "off",
            "vue/valid-v-text": "off",
        },
    },
    {
        name: "Rules/Deprecated",
        rules: {
            "vue/component-tags-order": "off",
        },
    },
);

// Remember to update your config when adding to eslint.
// {
//   "eslint.validate": [
//     "javascript",
//     "javascriptreact",
//     "json",
//     "jsonc",
//     "json5",
//     "yaml",
//     "toml"
//   ]
// }

// Add to eslint when released
// npm install @eslint/css -D
// https://github.com/eslint/css
