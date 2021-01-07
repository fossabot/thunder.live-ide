// COMMENT THE DISABLED ESLINT RULES BELOW TO SEE MORE ERRORS
/* eslint-disable @thunder-angular/no-magic-numbers */

// Bypass this rule to focus on the examples.
/* eslint-disable @typescript-eslint/no-type-alias */

// This rule is customized to support `ignoreClassProperties` option.
// @see libs ./eslint/lib/override-rules/no-magic-numbers.js

// "@typescript/eslint/no-magic-numbers": ["error",{"ignore":[],"ignoreArrayIndexes":false,"enforceConst":false,"detectObjects":false,"ignoreNumericLiteralTypes":false,"ignoreEnums":false,"ignoreReadonlyClassProperties":false}],
// Disallow magic numbers
// https://github.com/typescript-eslint/typescript-eslint/blob/v4.10.0/packages/eslint-plugin/docs/rules/no-magic-numbers.md

// BAD
const badPrice: number = 100 * 0.25;
const badArray: number[] = [1, 2, 3];
console.log(badPrice, badArray);

// GOOD
const price: number = 100;
const taxPercentage: number = 0.25;
const goodPrice: number = price * taxPercentage;

const foo: number = 1;
const baz: number = 2;
const bar: number = 3;
const goodArray: number[] = [foo, baz, bar];
console.log(goodPrice, goodArray);

/**
 * ignoreArrayIndexes: false
 */
const one: number = 1;
const two: number = 2;
const three: number = 3;
const arrayIndexes: number[] = [one, two, three];

// BAD
const badItem: number = arrayIndexes[1];
console.log(badItem);

// GOOD
const goodIndex: number = 1;
const goodItem: number = arrayIndexes[goodIndex];
console.log(goodItem);

/**
 * ignoreDefaultValues: false
 */

// Best practices
interface IAccountancy {
  tax?: number;
}
const accountancy: IAccountancy  = {};
const { tax }: IAccountancy = accountancy;
console.log(tax);

/**
 * ignoreEnums: true
 */

// Best practices
export enum FilePermissions   {
  Read = 1,
  Write = 2,
  Execute = 4
}

/**
 * ignoreNumericLiteralTypes: true
 */

// Best practices
export type SmallPrimes = 2 | 3 | 5 | 7 | 11;

/**
 * ignoreClassProperties: true
 */

// Best practices
export class GoodPropClass {
  public score: number = 100;
}
