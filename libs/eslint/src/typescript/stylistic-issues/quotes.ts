// COMMENT THE DISABLED ESLINT RULES BELOW TO SEE MORE ERRORS
/* eslint-disable @typescript-eslint/quotes */

// "@typescript/eslint/quotes": ["error","double",{"allowTemplateLiterals":false,"avoidEscape":false}],
// Enforce the consistent use of either backticks, double, or single quotes
// https://github.com/typescript-eslint/typescript-eslint/blob/v4.10.0/packages/eslint-plugin/docs/rules/quotes.md

// BAD
const double: string = "double";
console.log(double);

// GOOD
const single: string = 'single';
const backtick: string = `
back
tick
`;
console.log(single, backtick);
