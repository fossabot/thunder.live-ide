// COMMENT THE DISABLED ESLINT RULES BELOW TO SEE MORE ERRORS
/* eslint-disable @typescript-eslint/quotes */

// "@typescript/eslint/quotes": ["error","double",{"allowTemplateLiterals":false,"avoidEscape":false}],
// Enforce the consistent use of either backticks, double, or single quotes
// https://github.com/typescript-eslint/typescript-eslint/blob/v4.10.0/packages/eslint-plugin/docs/rules/quotes.md

// BAD
export const double: string = "double";

// GOOD
export const single: string = 'single';
export const backtick: string = `
back
tick
`;
