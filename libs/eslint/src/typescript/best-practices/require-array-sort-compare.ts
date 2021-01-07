// Bypass these rules to focus on the example
/* eslint-disable @thunder-angular/no-magic-numbers */
/* eslint-disable @typescript-eslint/no-unused-vars */

// COMMENT THE DISABLED ESLINT RULES BELOW TO SEE MORE ERRORS
/* eslint-disable @typescript-eslint/require-array-sort-compare */

// "@typescript/eslint/require-array-sort-compare": ["error",{"ignoreStringArrays":false}],
// Requires `Array#sort` calls to always provide a `compareFunction`
// https://github.com/typescript-eslint/typescript-eslint/blob/v4.10.0/packages/eslint-plugin/docs/rules/require-array-sort-compare.md


const exampleArr: number[] = [1, 50, 3, 20, 30, 5];

// BAD
exampleArr.sort();
// Result is [1, 20, 3, 30, 5, 50]

// GOOD
exampleArr.sort((firstNum: number, secondNum: number) => firstNum - secondNum);
// Result is [1, 3 ,5 , 20, 30, 50]

// This rules prevent using Array.sort() without providing a compare argument, it maybe not safety.
// When called without a compare function, Array#sort() converts all non-undefined array elements into strings and then compares said strings based off their UTF-16 code units.
