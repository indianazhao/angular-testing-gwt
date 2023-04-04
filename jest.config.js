module.exports = {
  preset: 'jest-preset-angular',
  roots: ['src'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  setupFilesAfterEnv: [
    '<rootDir>/setup-jest.ts',
    '<rootDir>/node_modules/@hirez_io/jest-given/dist/jest-given.js',
  ],
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: 'coverage/my-app',
};
