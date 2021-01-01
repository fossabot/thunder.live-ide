// COMMENT THE DISABLED ESLINT RULES BELOW TO SEE MORE ERRORS
/* eslint-disable @typescript-eslint/space-before-function-paren */

// "@typescript/eslint/space-before-function-paren": ["error","always"],
// Enforces consistent spacing before function parenthesis
// https://github.com/typescript-eslint/typescript-eslint/blob/v4.10.0/packages/eslint-plugin/docs/rules/space-before-function-paren.md

// BAD
export class BadClass {
  public foo (): void {
    // Do something
  }
}

// GOOD
export class GoodClass {
  public foo(): void {
    // Do something
  }
}
