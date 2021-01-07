// COMMENT THE DISABLED ESLINT RULES BELOW TO SEE MORE ERRORS
/* eslint-disable @typescript-eslint/no-extra-parens */

// Bypass this rule to focus on the examples.
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars-experimental */

// '@typescript-eslint/no-extra-parens': ['error', 'all', { returnAssign: false, nestedBinaryExpressions: false }]
// Disallow unnecessary parentheses
// https://github.com/typescript-eslint/typescript-eslint/blob/v4.10.0/packages/eslint-plugin/docs/rules/no-extra-parens.md

export interface IMembers {
  member?: string;
  otherMember?: string;
}
const numbVariable: number = 1;
const numbVariable01: number = 1;
const numbVariable02: number = 2;
const numbVariable03: number = 3;
const numbArray: number[] = [numbVariable01, numbVariable02, numbVariable03];
const badObject: IMembers = {};
// BAD
const badMultipleResult: number = (numbVariable02 * numbVariable03);

for (const numb in (badObject)) {
  console.log(numb);
}

for (const numb of (numbArray)) {
  console.log(numb);
}

const badTypeOfNumbVariable: unknown = typeof (numbVariable);

// GOOD
const goodMultipleResult: number = numbVariable02 * numbVariable03;

for (const numb in badObject) {
  console.log(numb);
}

for (const numb of numbArray) {
  console.log(numb);
}

const goodTypeOfNumbVariable: unknown = typeof numbVariable;

/**
 * returnAssign: false
 */
// Default
export function firstFoo(b: string): string {
  const isAssigned: boolean = b ? true : false;
  const  bValue: string = b;
  const noValue: string = 'no value';

  return isAssigned ? b = bValue : b = noValue; // <= still valid but confused
}

// Recommendation
export function secondFoo(b: string): string {
  const isAssigned: boolean = b ? true : false;
  const  bValue: string = b;
  const noValue: string = 'no value';

  return isAssigned ? (b = bValue) : (b = noValue);
}

/**
 * returnAsnestedBinaryExpressionssign: false
 */
// Default
const defaultY1: number = numbVariable01 || numbVariable02 && numbVariable03;
const defaultY2: number = numbVariable01 + numbVariable02 * numbVariable03;
const defaultY3: number = numbVariable01 * numbVariable02 / numbVariable03;

// Recommendation
const recommendY1: number = numbVariable01 || (numbVariable02 && numbVariable03);
const recommendY2: number = numbVariable01 + (numbVariable02 * numbVariable03);
const recommendY3: number = (numbVariable01 * numbVariable02) / numbVariable03;
