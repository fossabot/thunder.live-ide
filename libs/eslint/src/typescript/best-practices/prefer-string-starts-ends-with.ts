// COMMENT THE DISABLED ESLINT RULES BELOW TO SEE MORE ERRORS
/* eslint-disable @typescript-eslint/prefer-string-starts-ends-with */

// "@typescript/eslint/prefer-string-starts-ends-with": ["error"],
// Enforce the use of `String#startsWith` and `String#endsWith` instead of other equivalent methods of checking substrings
// https://github.com/typescript-eslint/typescript-eslint/blob/v4.10.0/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md

const stringVariable: string = '';

// BAD
// Check string starts with
let isStartWith: boolean = false;
const firstIndex: number = 0;
const thirdIndex: number = 3;
isStartWith = stringVariable[firstIndex] === 'b';
isStartWith = stringVariable.charAt(firstIndex) === 'b';
isStartWith = stringVariable.indexOf('text') === firstIndex;
isStartWith = stringVariable.slice(firstIndex, thirdIndex) === 'text';
isStartWith = stringVariable.substring(firstIndex, thirdIndex) === 'text';
isStartWith = /^text/.test(stringVariable);
console.log(isStartWith);

// Check string ends with
let isEndWith: boolean = false;
const oneItemUnit: number = 1;
const threeItemUnit: number = 3;
isEndWith = stringVariable[stringVariable.length - oneItemUnit] === 'b';
isEndWith = stringVariable.charAt(stringVariable.length - oneItemUnit) === 'b';
isEndWith = stringVariable.lastIndexOf('text') === stringVariable.length - threeItemUnit;
isEndWith = stringVariable.slice(-threeItemUnit) === 'text';
isEndWith = stringVariable.substring(stringVariable.length - threeItemUnit) === 'text';
isEndWith = /text$/.test(stringVariable);
console.log(isEndWith);

// GOOD
stringVariable.startsWith('text');
stringVariable.endsWith('text');
