export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // testMatch: ['<rootDir>/**/*.spec.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: [
    'node_modules',
    'src/database',
    'src/test',
    'src/types',
  ],
  globals: { 'ts-jest': { diagnostics: false } },
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  transformIgnorePatterns: ['!node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'tests/__mocks__/fileMock.js',
  },
};
