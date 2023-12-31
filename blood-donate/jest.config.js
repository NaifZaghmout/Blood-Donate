module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.js"],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: [
    "/node_modules/(?!axios).+\\.js$"
  ],  
};
