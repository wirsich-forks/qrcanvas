// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
    }
  },
  // add your custom rules here
  'rules': {
    'import/extensions': ['error', 'always', {
      'js': 'never',
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': ['error', {
      allow: ['error', 'warn'],
    }],
    'no-param-reassign': ['error', {
      props: false,
    }],
    'array-callback-return': ['off'],
    'consistent-return': ['off'],
    'no-use-before-define': ['error', 'nofunc'],
    'object-shorthand': ['error', 'always'],
    'no-mixed-operators': ['off'],
    'no-bitwise': ['error', { int32Hint: true, allow: ['>>'] }],
    'no-underscore-dangle': ['off'],
    'arrow-parens': 0,
  },
  globals: {
    // add globals here
  },
}
