// COMMENT THE DISABLED ESLINT RULES BELOW TO SEE MORE ERRORS
/* eslint-disable @typescript-eslint/no-extraneous-class */

// Bypass this rule to focus on the examples.
/* eslint-disable @typescript-eslint/explicit-member-accessibility */

// "@typescript/eslint/no-extraneous-class": ["error",{"allowConstructorOnly":false,"allowEmpty":false,"allowStaticOnly":false,"allowWithDecorator":false}],
// Forbids the use of classes as namespaces
// https://github.com/typescript-eslint/typescript-eslint/blob/v4.10.0/packages/eslint-plugin/docs/rules/no-extraneous-class.md

import { Directive } from '@angular/core';

// BAD
export class BadEmptyClass {}
export class ConstructorOnly {
  constructor() {
    // Do something
    console.log('1');
  }
}
export class StaticOnly {
  public static readonly version: number = 42;

  public static hello(): void {
    console.log('Hello, world!');
  }
}

export class SuperClass {
  public prop: string = 'p';

  public readonly score: number = 143;
}

// GOOD
@Directive()
export class ExampleDirective {}

export class EmptyExtendsClass extends SuperClass {}
