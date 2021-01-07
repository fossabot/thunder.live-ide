// COMMENT THE DISABLED ESLINT RULES BELOW TO SEE MORE ERRORS
/* eslint-disable @typescript-eslint/naming-convention */

// Bypass these rules to focus on the examples.
/* eslint-disable @typescript-eslint/no-type-alias */

// "@typescript/eslint/naming-convention": ["error",{"selector":"default","format":["camelCase"],"leadingUnderscore":"allow","trailingUnderscore":"allow"},{"selector":"variable","format":["camelCase","UPPER_CASE"],"leadingUnderscore":"allow","trailingUnderscore":"allow"},{"selector":"typeLike","format":["PascalCase"]}],
// Enforces naming conventions for everything across a codebase
// https://github.com/typescript-eslint/typescript-eslint/blob/v4.10.0/packages/eslint-plugin/docs/rules/naming-convention.md

/*
{
  selector: 'interface',
  format: ['PascalCase'],
  custom: {
    regex: '^I[A-Z]',
    match: true
  }
}
*/

// BAD
export interface Foo {
  name: string;
}

// GOOD
export interface IFoo {
  name: string;
}

/*
{
  selector: 'typeParameter',
  format: ['PascalCase'],
  prefix: ['T', 'R', 'U', 'V', 'K']
}
*/

// BAD
export class BadGeneric<Request, Result> {
  public request: Request | undefined;

  public result: Result | undefined;

  public foo(): void {
    console.log(this.request, this.result);
  }
}

// GOOD
export class GoodGeneric<T, R, U, V> {
  public t: T | undefined;

  public r: R | undefined;

  public u: U | undefined;

  public v: V | undefined;

  public foo(): void {
    console.log(this.t, this.r, this.u, this.v);
  }
}

/*
{
  selector: ['variable', 'parameter', 'property'],
  types: ['boolean'],
  format: ['PascalCase'],
  prefix: ['is', 'should', 'has', 'can', 'did', 'will', 'ignore'],
  filter: {
    regex: '^(production|readonly)$',
    match: false
  }
}
*/

// BAD
const paidFor: boolean = true; // No prefix
const wasPaidFor: boolean = true; // Wrong prefix
const areBillsPaidFor: boolean = true; // Custom prefix
const hadHaveHadBeenPaidFor: boolean = true; // What is this?
const invalid: boolean = false; // Not meaningful

// GOOD
const isOnline: boolean = true;
const isPaidFor: boolean = true;
const hasChildren: boolean = true;

// Boolean variable should be positive.
// BAD
const isDisabled: boolean = true; // Negative
const isNotActive: boolean = true; // Negative
const hasNoBillingAddress: boolean = true; // Negative

// GOOD
const isEnabled: boolean = true;
const isActive: boolean = true; // Negative
const hasBillingAddress: boolean = true; // Negative

console.log(paidFor, wasPaidFor, areBillsPaidFor, hadHaveHadBeenPaidFor, invalid, isOnline, isPaidFor, hasChildren);
console.log(hasChildren, isDisabled, isNotActive, hasNoBillingAddress, isEnabled, isActive, hasBillingAddress);

/*
{
  selector: ['variable', 'property', 'parameter', 'function', 'classMethod', 'objectLiteralMethod', 'typeMethod'],
  format: ['camelCase']
}
*/

// BAD
const NumberOfDogs: number = 4;
const NUMBEROFDOGS: number = 4;
export function GetDogName(): string {
  return 'Peter';
}

export function GET_CAT_NAME(): string {
  return 'Nami';
}

console.log(NumberOfDogs, NUMBEROFDOGS);

// GOOD
const numberOfDogs: number = 4;
export function getDogName(): string {
  return 'Peter';
}

export function getCatName(): string {
  return 'Nami';
}

console.log(numberOfDogs);

/*
{
  selector: 'classProperty',
  modifiers: ['private'],
  format: ['camelCase'],
  leadingUnderscore: 'require'
},
{
  selector: 'classMethod',
  modifiers: ['private'],
  format: ['camelCase'],
  leadingUnderscore: 'require'
}
*/

// BAD
export class BadClass {
  private readonly privateProperty: string = '';

  public foo(): void {
    console.log(this.privateProperty);
    this.privateMethod();
  }

  private privateMethod(): void {
    // TODO
  }
}

// GOOD
export class GoodClass {
  private readonly _privateProperty: string = '';

  public foo(): void {
    console.log(this._privateProperty);
    this._privateMethod();
  }

  private _privateMethod(): void {
    // TODO
  }
}

/*
{
  selector: 'variable',
  modifiers: ['exported', 'const', 'global'],
  format: ['UPPER_CASE']
}
Require `const` declaration global must be in UPPERCASE
*/

// BAD
const numberOfAppFeature: number = 2;

// GOOD
const NUMBER_OF_APP_FEATURE: number = 2;
export function abc(): void {
  const numberOfCat: number = 2;
  console.log(numberOfCat);
}

console.log(numberOfAppFeature, NUMBER_OF_APP_FEATURE);

/*
{ selector: 'typeLike', format: ['PascalCase'] }
*/

export type myType = string | number;

//BAD
export type MyType = string | number;
