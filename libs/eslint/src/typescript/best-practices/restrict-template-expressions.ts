// COMMENT THE DISABLED ESLINT RULES BELOW TO SEE MORE ERRORS
/* eslint-disable @typescript-eslint/restrict-template-expressions */

// "@typescript/eslint/restrict-template-expressions": ["error",{"allowNumber":true}],
// Enforce template literal expressions to be of string type
// https://github.com/typescript-eslint/typescript-eslint/blob/v4.10.0/packages/eslint-plugin/docs/rules/restrict-template-expressions.md

// BAD
const arrayVariable: string[] = ['item1', 'item2'];
console.log(`${arrayVariable} is here`);

// GOOD
const stringVariable: string = 'another string';
const numberVariable: number = 1;

console.log(`${stringVariable} is here`);
console.log(`${stringVariable || 'default value'} is here`);
console.log(`${numberVariable.toString()} is here`);

// Option:
// allowNumber: true (default),
// allowBoolean: false (default),
// allowAny: false (default),
// allowNullish: false (default),


