// This rule is disabled to support the `@typescript-eslint/typedef` rule.

// "@typescript/eslint/no-inferrable-types": ["error",{"ignoreParameters":false,"ignoreProperties":false}],
// Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
// https://github.com/typescript-eslint/typescript-eslint/blob/v4.10.0/packages/eslint-plugin/docs/rules/no-inferrable-types.md

// BEST PRACTICES
const numberOfCat: number = 10;
console.log(numberOfCat);

export class Baz {
  public prop: string = 'p';
}
