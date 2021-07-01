module.exports = {
  parser: 'babel-eslint',
  extends: ['plugin:prettier/recommended', 'plugin:react/recommended'
  ],
  plugins: ['react', 'react-hooks'
  ],
  rules: {
    'no-unused-vars': 'error',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    'object-curly-spacing': ["always"]
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
  },
}
