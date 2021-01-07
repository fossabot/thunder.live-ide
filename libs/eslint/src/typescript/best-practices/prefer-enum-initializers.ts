// COMMENT THE DISABLED ESLINT RULES BELOW TO SEE MORE ERRORS
/* eslint-disable @typescript-eslint/prefer-enum-initializers */

// "@typescript/eslint/prefer-enum-initializers": ["error"],
// Prefer initializing each enums member value
// https://github.com/typescript-eslint/typescript-eslint/blob/v4.10.0/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md


// Bad
enum BadExample {
  FirstValue, // <= Must initializing value
  SecondValue // <= Must initializing value
}
enum BadColor {
  Green = 'Green',
  // @ts-expect-error: Expect error occurs
  Red // <= Must initializing value
}
enum BadDirection {
  Up, // <= Must initializing value
  Down = 2
}

// Good
enum GoodExample {
  FirstValue = 'FirstValue',
  SecondValue = 'SecondValue'
}
enum GoodColor {
  Green = 'Green',
  Red = 'Red'
}
enum GoodDirection {
  Up = 1,
  Down = 2
}

console.log(BadExample, BadColor, BadDirection, GoodExample, GoodColor, GoodDirection);
