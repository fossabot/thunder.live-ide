// COMMENT THE DISABLED ESLINT RULES BELOW TO SEE MORE ERRORS
/* eslint-disable padding-line-between-statements */

// "padding-line-between-statements": ["error"],
// This rule requires or disallows blank lines between the given 2 kinds of statements. Properly blank lines help developers to understand the code.
// https://eslint.org/docs/rules/padding-line-between-statements

/*
{ blankLine: 'always', prev: '*', next: 'return' }
 */
// BAD
export function badFoo(): number {
  const numberOfDog: number = 1;
  const numberOfCat: number = 2;
  return numberOfDog + numberOfCat;
}

// GOOD
export function goodFoo(): number {
  const numberOfDog: number = 1;
  const numberOfCat: number = 2;

  return numberOfDog + numberOfCat;
}

/*
{ blankLine: 'always', prev: 'block', next: '*' }
 */

// BAD
export function badBaz(numberOfDog: number = 1): void {
  const oneDog: number = 1;
  if (numberOfDog === oneDog) {
    console.log('Had three dogs!');
  }
  console.log('Had many dogs!');
  console.log('Also have no cat!');
  switch (numberOfDog) {
    case oneDog:
      console.log('One dog!');
      break;
    default:
      console.log('Many dogs!');
      break;
  }
  console.log('Dog dog dog!');
  console.log('Cat cat cat!');
}

// GOOD
export function goodBaz(numberOfDog: number = 1): void {
  const oneDog: number = 1;
  if (numberOfDog === oneDog) {
    console.log('Had three dogs!');
  }

  console.log('Had many dogs!');
  console.log('Also have no cat!');
  switch (numberOfDog) {
    case oneDog:
      console.log('One dog!');
      break;
    default:
      console.log('Many dogs!');
      break;
  }

  console.log('Dog dog dog!');
  console.log('Cat cat cat!');
}
