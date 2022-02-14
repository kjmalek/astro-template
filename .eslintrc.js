module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "svelte3"
    ],
    "overrides": [
        {
            "files": ["src/**/*.svelte"],
            "processor": "svelte3/svelte3"
        }
    ],
    "rules": {
    }
}
