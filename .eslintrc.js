module.exports = {
    "env": {
    "browser": true,
    "es2021": true,
    "jest": true,
    "node": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "overrides": [
    {
    "env": {
    "node": true
    },
    "files": [".eslintrc.{js,cjs}"],
    "parserOptions": {
    "sourceType": "script"
    }
    }
    ],
    "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
    },
    "plugins": ["react"],
    "settings": {
    "react": {
    "version": "detect" // or specify your React version, e.g., "16.8"
    }
    },
    "rules": {}
    }
