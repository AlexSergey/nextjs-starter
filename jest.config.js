module.exports = {
  rootDir: './src',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transform: {
    '^.+\\.(ts|tsx)$': ['babel-jest'],
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '../node_modules/jest-css-modules',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/fileTransformer.js',
  },
  verbose: true,
  collectCoverage: true,
  coveragePathIgnorePatterns: ['<rootDir>/test/test-utils.js'],
  transformIgnorePatterns: ['node_modules/'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  testPathIgnorePatterns: ['<rootDir>/(build|dist|temp|docs|documentation|public|node_modules)/'],
};
