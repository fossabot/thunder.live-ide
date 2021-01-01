// COMMENT THE DISABLED ESLINT RULES BELOW TO SEE MORE ERRORS
/* eslint-disable @typescript-eslint/no-magic-numbers */

// "@typescript/eslint/no-magic-numbers": ["error",{"ignore":[],"ignoreArrayIndexes":false,"enforceConst":false,"detectObjects":false,"ignoreNumericLiteralTypes":false,"ignoreEnums":false,"ignoreReadonlyClassProperties":false}],
// Disallow magic numbers
// https://github.com/typescript-eslint/typescript-eslint/blob/v4.10.0/packages/eslint-plugin/docs/rules/no-magic-numbers.md

// BAD
export const badPrice: number = 100 * 0.25;
export const badArray: number[] = [1, 2, 3];
export class Foo {
  public score: number = 100;
}

// GOOD
export const price: number = 100;
export const tax: number = 0.25;
export const goodPrice: number = price * tax;

export const foo: number = 1;
export const baz: number = 2;
export const bar: number = 3;
export const arr: number[] = [foo, baz, bar];
export class Baz {
  public readonly score: number = 100; // <-- must have `readonly` modifier
}
