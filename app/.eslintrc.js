module.exports = {
  extends: ["@react-native-community", "eslint-config-prettier"],
  rules: {
    "react-native/no-inline-styles": 0, // Disable inline styles
    "prettier/prettier": "error", // Prettier rules
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "react/prop-types": "off", // Provide types statically using TypeScript
    "react/react-in-jsx-scope": "off", // Disallow missing React when using JSX
    "@typescript-eslint/explicit-module-boundary-types": "off", //Explicit types for function return values
    "@typescript-eslint/no-non-null-assertion": "off", // does not use the strictNullChecks compiler option
    "@typescript-eslint/no-unused-vars": "warn", // Unused variables
    "@typescript-eslint/no-explicit-any": "off", // Explicit any
  },
};
