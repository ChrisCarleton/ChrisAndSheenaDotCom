module.exports = {
  'plugins': [ 'import', 'vue' ],
  'extends': [ 'strict', 'strict/mocha', 'strict/browser', 'plugin:vue/recommended' ],
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'parser': 'babel-eslint',
    'ecmaVersion': 9,
    'sourceType': 'module',
  },
  'env': {
    'browser': true,
    'node': true,
    'mocha': true,
  },
  'rules': {
    'func-style': 0,
    'id-length': 0,
    'no-invalid-this': 0,
    'no-warning-comments': 1,
    'object-shorthand': [ 2, 'properties' ],
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 4,
        multiline: 1,
      },
    ],
    'vue/singleline-html-element-content-newline': 0,
  },
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'webpack.dev.js',
      },
    },
  },
};
