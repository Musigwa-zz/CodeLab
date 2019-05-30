module.exports = {
  displayName: "CodeLab",
  verbose: true,
  preset: "jest-expo",
  testMatch: ["**/?(*.)+(spec|test).js"],
  collectCoverage: true,
  clearMocks: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  coverageThreshold: {
    global: {}
  },
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|react-clone-referenced-element|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|sentry-expo|native-base))"
  ]
};
