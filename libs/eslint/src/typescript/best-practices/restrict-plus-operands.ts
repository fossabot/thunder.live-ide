// Bypass these rules to focus on the examples
/* eslint-disable @thunder-angular/no-magic-numbers */
/* eslint-disable @typescript-eslint/no-unused-vars */

// COMMENT THE DISABLED ESLINT RULES BELOW TO SEE MORE ERRORS
/* eslint-disable @typescript-eslint/restrict-plus-operands */

// "@typescript/eslint/restrict-plus-operands": ["error",{"checkCompoundAssignments":false}],
// When adding two variables, operands must both be of type number or of type string
// https://github.com/typescript-eslint/typescript-eslint/blob/v4.10.0/packages/eslint-plugin/docs/rules/restrict-plus-operands.md


// This is maybe unnecessary
// it may grow the bundle size and developers may need more step to build a string.

const numberVariable: number = 1;
const stringVariable: string = 'Another string';

// BAD
const badExample: string = stringVariable + numberVariable;

// GOOD
const goodStringPlus1: string = stringVariable + stringVariable;
const goodStringPlus2: string = numberVariable.toString() + stringVariable;

const goodNumberPlus1: number = numberVariable + numberVariable;
const goodNumberPlus2: number = parseInt('1') + numberVariable;


// option: checkCompoundAssignments: true (default is false);
// BAD
let badString: string = '';
badString += 1;

// GOOD
let goodNumber: number = 0;
goodNumber += 1;

let goodString: string = '';
goodString += 'test';
