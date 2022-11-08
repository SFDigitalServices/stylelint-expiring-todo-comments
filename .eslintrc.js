/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: [
    'sfgov',
    'unicorn'
  ],
  extends: [
    'plugin:sfgov/recommended',
    'plugin:sfgov/node'
  ],
  rules: {
    'unicorn/expiring-todo-comments': ['error', {
      allowWarningComments: true
    }],
    'no-trailing-spaces': ['warn', {
      ignoreComments: true
    }]
  }
}
