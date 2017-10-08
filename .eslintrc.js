module.exports = {
    "env": {
      "es6": true,
      "jest": true,
      "node": true
    },
    "extends": "airbnb-base",
    "plugins": [
        "graphql"
    ],
    "rules": {
      "comma-dangle": ["error", "never"],
      "graphql/template-strings": ["error", { "env": "apollo", "schemaJson": require('./schema.json') }],
      "indent": ["error", 2, { "SwitchCase": 1 }],
      "no-unused-expressions": [2, { "allowShortCircuit": true }],
      "max-len": [2, 175, 2, { "ignoreUrls": true, "ignorePattern": "url.+" }]
    }
};
