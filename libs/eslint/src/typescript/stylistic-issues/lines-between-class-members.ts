// COMMENT THE DISABLED ESLINT RULES BELOW TO SEE MORE ERRORS
/* eslint-disable @typescript-eslint/lines-between-class-members */

// "@typescript/eslint/lines-between-class-members": ["error","always",{"exceptAfterOverload":true,"exceptAfterSingleLine":false}],
// Require or disallow an empty line between class members
// https://github.com/typescript-eslint/typescript-eslint/blob/v4.10.0/packages/eslint-plugin/docs/rules/lines-between-class-members.md

// BAD
export class BadPropertyClass {
  public readonly baz: number = 1;
  public readonly bar: number = 2; // <-- error
}
export class BadClass {
  public baz(): void {
    // Do something
  }
  public qux(): void {
    // Do something
  }
  public bar(a: string): void;
  public bar(a: string, b: string): void;
  public bar(a: string, b?: string): void {
    console.log(a, b);
  }
}
// GOOD
export class GoodPropertyClass {
  public readonly baz: number = 1;

  public readonly bar: number = 2;
}
export class GoodClass {
  public baz(): void {
    // Do something
  }

  public qux(): void {
    // Do something
  }

  public bar(a: string): void;

  public bar(a: string, b: string): void;

  public bar(a: string, b?: string): void {
    console.log(a, b);
  }
}
