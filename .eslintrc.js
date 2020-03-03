module.exports = {
    "root": true,
    "env": {
        "browser": true
    },
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaFeatures": {
            "legacyDecorators": true
        }
    },
    "parser": "vue-eslint-parser",
    "extends": [
        // add more generic rulesets here, such as:
        // 'eslint:recommended',
        "plugin:vue/recommended",
        "standard"
    ],
    "plugins": ["vue"],
    "rules": {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': ['error', 2]
    }
}
