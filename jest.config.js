export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '.*\\.woff.?|.*\\.woff2.?': '<rootDir>/__mocks__/fileMock.js',
  },
};
