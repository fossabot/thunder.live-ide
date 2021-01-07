// COMMENT THE DISABLED ESLINT RULES BELOW TO SEE MORE ERRORS
/* eslint-disable @typescript-eslint/typedef */

// Bypass these rules to focus on the examples.
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

// "@typescript/eslint/typedef": ["error",{"arrayDestructuring":false,"arrowParameter":false,"memberVariableDeclaration":false,"objectDestructuring":false,"parameter":false,"propertyDeclaration":false,"variableDeclaration":false,"variableDeclarationIgnoreFunction":false}],
// Requires type annotations to exist
// https://github.com/typescript-eslint/typescript-eslint/blob/v4.10.0/packages/eslint-plugin/docs/rules/typedef.md

/*
arrayDestructuring
*/

// BAD
const [a] = ['1'];
const [b, c] = ['1', '2'];
console.log(a, b, c);

// GOOD
const [x]: [string] = ['1'];
const [ignoreProperty, z]: [boolean, string] = [true, 'text'];
for (const [key, isValue] of new Map([['key', true]])) {
  console.log(key, isValue);
}

console.log(x, ignoreProperty, z);

/*
arrowParameter
*/

// BAD
const badArrFunc: (size: number) => void = size => {
  console.log(size);
};

['hello', 'world'].map(text => text.length);
const mapper = {
  map: (text: string): string => text + '...'
};
console.log(badArrFunc, mapper);

// GOOD
const goodArrFunc = (size: number): void => {
  console.log(size);
};

console.log(goodArrFunc);

/*
memberVariableDeclaration
*/

// BAD
export class BadContainsText {
  public delayedText = '';

  public immediateTextImplicit = 'text';
}

// GOOD
export class GoodContainsText {
  public delayedText: string = '';

  public immediateTextImplicit: string = 'text';
}

/*
objectDestructuring
*/

// BAD
export function foo(): void {
  const { length } = 'text';
  const [l, i] = Math.random() ? ['1', '2'] : ['3', '4'];
  console.log(length, l, i);
}

// GOOD
const { length }: {length: number} = 'text';
const [p, s]: [string, string] = Math.random() ? ['1', '2'] : ['3', '4'];
console.log(length, p, s);

/*
parameter
*/

// BAD
// @ts-expect-error: Expect error occurs
export function withoutParameterType(param): void {
  console.log(param);
}

// GOOD
export function withParameterType(param: number): void {
  console.log(param);
}

/*
propertyDeclaration
*/

// BAD
export interface IBadMembers {
  // @ts-expect-error: Expect error occurs
  member;
  // @ts-expect-error: Expect error occurs
  otherMember;
}

// GOOD
export interface IGoodMembers {
  member: string;
  otherMember: string;
}

/*
variableDeclaration
*/

// BAD
export function badVariableDeclaration(): void {
  const text = 'text';
  let initialText = 'original';

  initialText = 'text';

  console.log(text, initialText);
}

// GOOD
export function goodVariableDeclaration(): void {
  const text: string = 'text';
  let initialText: string = 'original';

  initialText = 'text';

  console.log(text, initialText);
}

/*
variableDeclarationIgnoreFunction
*/

// BEST PRACTICES
export function goodVariableDeclarationIgnoreFunction(): void {
  const o = (): void => {
    // TODO
  };

  const v: () => void = (): void => {
    // TODO
  };

  console.log(o, v);
}

export class Foo {
  public a = (): void => {
    // TODO
  };

  public b: () => void = (): void => {
    // TODO
  };
}
