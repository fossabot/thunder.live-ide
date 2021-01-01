// COMMENT THE DISABLED ESLINT RULES BELOW TO SEE MORE ERRORS
// /* eslint-disable @typescript-eslint/no-inferrable-types */

// "@typescript/eslint/no-inferrable-types": ["error",{"ignoreParameters":false,"ignoreProperties":false}],
// Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
// https://github.com/typescript-eslint/typescript-eslint/blob/v4.10.0/packages/eslint-plugin/docs/rules/no-inferrable-types.md

// BAD
export const a = 10;
export class Foo {
  public prop = "p";
}

// GOOD
export const b: number = 10;
export class Baz {
  public prop: string = "p";
}
