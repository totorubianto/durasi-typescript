module.exports = {
  clearMocks: true,
  roots: ["<rootDir>/test/"],
  testEnvironment: "node",
  transform: {
    "^.+\\.(t|j)sx?$": "esbuild-jest",
  },
};
