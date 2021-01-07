// COMMENT THE DISABLED ESLINT RULES BELOW TO SEE MORE ERRORS
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */

// "@typescript/eslint/adjacent-overload-signatures": ["error"],
// Require that member overloads be consecutive
// https://github.com/typescript-eslint/typescript-eslint/blob/v4.10.0/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md

// BAD
export class Foo {
  /**
   * Purpose 1
   */
  public foo(name: string): void;
  /**
   * Purpose 2
   */
  public foo(name: string, age: number): void;
  // @ts-expect-error: Unreachable code error
  public bar(): void { // <-- error occurs
    // Do something.
  }

  public foo(name: string, age?: number): void {
    console.log(name, age);
  }
}

// GOOD
export class GoodFoo {
  /**
   * Purpose 1
   */
  public foo(name: string): void;
  /**
   * Purpose 2
   */
  public foo(name: string, age: number): void;
  public foo(name: string, age?: number): void {
    console.log(name, age);
  }

  public bar(): void { // <-- error occurs
    // Do something.
  }
}
