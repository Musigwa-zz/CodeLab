module.exports = {
  displayName: { name: "CodeLab", color: "green" },
  verbose: true,
  preset: "jest-expo",
  testMatch: ["**/?(*.)+(spec|test).js"],
  collectCoverage: true,
  clearMocks: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|react-clone-referenced-element|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|sentry-expo|native-base))"
  ]
};
