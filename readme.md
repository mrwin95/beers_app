1. Initial node rest api app with command
 yarn add express
2. install some of module that request to work with typescript in development environment
yarn add -D typescript @types/express @types/node
3. create typescript config file with the folow command
npx tsc --init
4. add script tag to run code without rebuild
npx tsc && node build/app.js
5. auto rebuild whenever code changes
I am using pm2 module to handle this job
6. install eslint for project and in VSCode
yarn add -D eslint
7. initial eslint config file
8. install prettier
yarn add -D prettier
9. add eslint pugin prettier using for setting some rules
yarn add -D eslint-plugin-prettier && eslint-config-prettier

module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': 'off',
    'no-console': 'off',
  },
};

10. add more plugin supporting for eslint config and import classes
yarn add -D eslint-import-resolver-typescript tsconfig-paths

11. install module for test purpose
yarn add -D jest ts-jest @types/jest
create jest config file
npx ts-jest config:init

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  converageDirectory: 'converage',
  collectCoverageFrom: ['src/**/*.{js,ts}'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    },
  },

  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1'
  },
  moduleDirectories: ['node_modules', 'src'],
};

12. add script to start jest

13. Documentation nodejs restfull api with swagger and jsdoc
Installing swagger and jsdoc
yarn add swagger-jsdoc swagger-ui-express
install for dev purpose
yarn add -D @types/swagger-jsdoc @types/swagger-ui-express
14. prepare logger module
    install module for logger
    yarn add pino
    yarn add -D @types/pino
    install monent
    yarn add dayjs
15. add zod to use in validateResource
    yarn add zod
16. add redis to do cache and nosql db

fix issue with  SyntaxError: Cannot use import statement outside a module
