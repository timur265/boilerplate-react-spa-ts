module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
  },
  modulePaths: ["<rootDir>/"],
  collectCoverageFrom: [
    "src/**/*.ts?(x)",
    "!src/**/*.stories.tsx",
    "!src/**/index.ts?(x)",
  ],
};
