module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": ["eslint:recommended", "prettier"],
    "parserOptions": {
        "ecmaVersion": 2022,
        "ecmaFeatures": {
          "jsx": true
        },
        "sourceType": "module"
      },
    "rules": {
        "semi": ["warn", "always"]
    }
};