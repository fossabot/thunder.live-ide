# TypeScript ESLint Strict Rules

Monorepo for all the tooling which enables ESLint to support TypeScript.

"OUR PLACE, OUR RULES"

Each rule was carefully reviewed. So DON'T BLAME THE STRICT RULES because they really make us have better thinkings in coding practice and review process, They are also helpful for future maintenance.

### [no-else-return](https://github.com/eslint/eslint/blob/master/docs/rules/no-else-return.md)

`Level: error`

If an `if` block contains a return statement, the `else` block becomes unnecessary. Its contents can be placed outside of the block.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
function foo() {
  if (x) {
    return y;
  } else {
    return z;
  }
}
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
function foo() {
  if (x) {
    return y;
  }

  return z;
}
```

### [no-empty-character-class](https://github.com/eslint/eslint/blob/master/docs/rules/no-empty-character-class.md)

`Level: error`

Disallow empty character classes in regular expressions.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
/^abc[]/.test('abcdefg'); // false
'abcdefg'.match(/^abc[]/); // null
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
/^abc/.test('abcdefg'); // true
'abcdefg'.match(/^abc/); // ["abc"]

/^abc[a-z]/.test('abcdefg'); // true
'abcdefg'.match(/^abc[a-z]/); // ["abcd"]
```

### [no-empty-function](https://github.com/eslint/eslint/blob/master/docs/rules/no-empty-function.md)

`Level: error`

Disallow empty functions

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
function foo() {}

const foo = function () {};
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
function foo() {
  // do nothing.
}

const foo = function () {
  // any clear comments.
};
```

### [@typescript-eslint/adjacent-overload-signatures](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md)

`Level: error`

Require that member overloads be consecutive. <br />
Grouping overloaded members together can improve readability of the code.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
class Foo {
  foo(s: string): void;
  foo(n: number): void;
  bar(): void {} // <-- error occurs
  foo(sn: string | number): void {}
}
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
class Foo {
  foo(s: string): void;
  foo(n: number): void;
  foo(sn: string | number): void {}
  bar(): void {}
}
```

### [@typescript-eslint/array-type](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md)

`Level: error`

Requires using `T[]` instead of `Array<T>` for arrays

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
const x: Array<string> = ['a', 'b'];
const y: ReadonlyArray<string> = ['a', 'b'];
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
const x: string[] = ['a', 'b'];
const y: readonly string[] = ['a', 'b'];
```

### [@typescript-eslint/await-thenable](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md)

`Level: error`

Disallows awaiting a value that is not a Thenable.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
await 'value';

const createValue = () => 'value';
await createValue();
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
await Promise.resolve('value');

const createValue = async () => 'value';
await createValue();
```

### [@typescript-eslint/ban-ts-comment](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md)

`Level: error`

Disallows the use of "@ts-ignore", "ts-nocheck".

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
if (false) {
  // @ts-ignore: Unreachable code error
  console.log('hello');
}
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
if (false) {
  // Compiler warns about unreachable code error
  console.log('hello');
}
```

### [@typescript-eslint/ban-tslint-comment](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-tslint-comment.md)

`Level: error`

Bans // tslint:<rule-flag> comments from being used.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
/* tslint:disable */
/* tslint:enable */
/* tslint:disable:rule1 rule2 rule3... */
/* tslint:enable:rule1 rule2 rule3... */
// tslint:disable-next-line
someCode(); // tslint:disable-line
// tslint:disable-next-line:rule1 rule2 rule3...
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
// This is a comment that just happens to mention tslint
```

### [@typescript-eslint/ban-types](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md)

`Level: error`

Bans String, Object, Boolean, Number, object... types from being used.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
// use lower-case primitives for consistency
const str: String = 'foo';
const bool: Boolean = true;
const num: Number = 1;
const symb: Symbol = Symbol('foo');

// use a proper function type
const func: Function = () => 1;

// use safer object types
const lowerObj: object = {};

const capitalObj1: Object = 1;
const capitalObj2: Object = { a: 'string' };

const curly1: {} = 1;
const curly2: {} = { a: 'string' };
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
// use lower-case primitives for consistency
const str: string = 'foo';
const bool: boolean = true;
const num: number = 1;
const symb: symbol = Symbol('foo');

// use a proper function type
const func: () => number = () => 1;

// use safer object types
const lowerObj: Record<string, unknown> = {};

const capitalObj1: number = 1;
const capitalObj2: { a: string } = { a: 'string' };

const curly1: number = 1;
const curly2: Record<'a', string> = { a: 'string' };
```

### [@typescript-eslint/brace-style](https://eslint.org/docs/rules/brace-style)

`Level: error`

Enforces one true brace style.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
function foo() {
  return true;
}

if (foo) {
  bar();
}
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
function foo() {
  return true;
}

if (foo) {
  bar();
}
```

### [@typescript-eslint/camelcase](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md)

`Level: off`

DEPRECATED

### [@typescript-eslint/class-literal-property-style](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-literal-property-style.md)

`Level: error`

This style checks for any getter methods that return literal values, and requires them to be defined using fields with the readonly modifier instead.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
public get numberOfMembers() {
  return 10;
}
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
public readonly numberOfMembers = 10;
```

### [@typescript-eslint/comma-dangle](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md)

`Level: error`

Disallows trailing commas.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
var foo = {
  bar: 'baz'
  // qux: 'quux', <-- error
};

// var arr = [1, 2,]; <-- error

foo({
  bar: 'baz'
  // qux: 'quux', <-- error
});
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
var foo = {
  bar: 'baz',
  qux: 'quux'
};

var arr = [1, 2];

foo({
  bar: 'baz',
  qux: 'quux'
});
```

### [@typescript-eslint/comma-spacing](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md)

`Level: error`

This rule enforces consistent spacing before and after commas in variable declarations, array literals, object literals, function parameters, and sequences. `{ "before": false, "after": true }`

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
// const scores: number[] = [1 ,2 , 3]; <-- error
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
const scores: number[] = [1, 2, 3];
```

### [@typescript-eslint/consistent-indexed-object-style](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md)

`Level: error`

TypeScript supports defining object show keys can be flexible using an index signature. TypeScript also has a builtin type named Record to create an empty object defining only an index signature.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
interface Foo {
  [key: string]: unknown;
}

type Foo = {
  [key: string]: unknown;
};
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
type Foo = Record<string, unknown>;
```

### [@typescript-eslint/consistent-type-assertions](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md)

`Level: error`

This rule aims to standardize the use of type assertion style across the codebase.

> - You must always use `param as T` instead of `<T>param`
> - Always prefer const `x: T = { ... };` to `const x = { ... } as T`;
> - Casting to `unknown` is allowed.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
interface IFoo {
  name: string;
}

function foo(): IFoo {
  const other = <IOtherFoo>{ abc: 's' }; // <-- error
  const other = { abc: 's' } as IOtherFoo; // <-- error

  return other as IFoo; // <-- error
}
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
interface IFoo {
  name: string;
}

function foo(): IFoo {
  const other: IOtherFoo = { abc: 's' };

  return (other as unknown) as IFoo;
}
```

### [@typescript-eslint/consistent-type-definitions](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md)

`Level: off`

We both use `type` and `interface` type definition so this rule will be off.

### [@typescript-eslint/consistent-type-imports](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md)

`Level: error`

TypeScript 3.8 added support for type-only imports. Type-only imports allow you to specify that an import can only be used in a type location, allowing certain optimizations within compilers.

This rule will enforce that you cannot use `import type Foo from '...'` and `import('Foo').Foo`

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
import type { Foo } from 'Foo';
import type Bar from 'Bar';
type T = Foo;
const x: Bar = 1;

type T = import('Foo').Foo;
const x: import('Bar') = 1;
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
import * as bar from 'Bar';
import { Foo } from 'Foo';
type T = Foo;
const x: bar.config = 1;
```

### [@typescript-eslint/dot-notation](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md)

`Level: error`

In JavaScript, one can access properties using the dot notation (foo.bar) or square-bracket notation (foo["bar"]). However, the dot notation is often preferred because it is easier to read, less verbose, and works better with aggressive JavaScript minimizers.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
class X {
  protected protectedProp: number = 1;
  private privateProp: number = 1;
}

const x: X = new X();
x['protectedProp'] = 2;
x['privateProp'] = 2;
x.protectedProp = 2;
x.privateProp = 2;
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
class X {
  public publicProp: number = 1;
}

const x: X = new X();
x.publicProp = 2;
```

### [@typescript-eslint/explicit-function-return-type](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md)

`Level: error`

Please see the documentation for more details.

### [@typescript-eslint/explicit-member-accessibility](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md)

`Level: error`

Require explicit accessibility modifiers on class properties and methods.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
class Animal {
  animalName: string; // Property
  public get name(): string {
    // get accessor
    return this.animalName;
  }
  public set name(value: string) {
    // set accessor
    this.animalName = value;
  }
  constructor(public readonly breed: string, name: string) {
    // Parameter property and constructor
    this.animalName = name;
  }
  walk(): void {
    // method
  }
}
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
export class Animal {
  private animalName: string; // Property
  public get name(): string {
    // get accessor
    return this.animalName;
  }
  public set name(value: string) {
    // set accessor
    this.animalName = value;
  }
  constructor(readonly breed: string, name: string) {
    // Parameter property and constructor
    this.animalName = name;
  }
  public walk(): void {
    // method
  }
}
```

### [@typescript-eslint/explicit-module-boundary-types](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md)

`Level: off`

We wish to make sure all functions have explicit return types, as opposed to only the module boundaries, So we can use explicit-function-return-type instead.

### [@typescript-eslint/func-call-spacing](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md)

`Level: error`

Disallows space between the function name and the opening parenthesis.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
// fn ();

// fn
// ();
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
fn();

fn();
```

### [@typescript-eslint/indent](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md)

`Level: error`

This rule enforces a consistent indentation style. The default style is 2 spaces.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
if (a) {
  /*tab*/ b = c;
  /*tab*/ function foo(d) {
    /*tab*/ /*tab*/ e = f;
    /*tab*/
  }
}
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
if (a) {
  b = c;
  function foo(d) {
    e = f;
  }
}
```

### [@typescript-eslint/init-declarations](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md)

`Level: error`

This rule is aimed at enforcing or eliminating variable initializations during declaration.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
class Foo {
  public bar: string;
  private baz: number;
}
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
class Foo {
  public bar: string = '';
  private baz: number | undefined;
}
```

### [@typescript-eslint/keyword-spacing](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md)

`Level: error`

This rule extends the base `eslint/keyword-spacing` rule. This version adds support for generic type parameters on function calls.

### [@typescript-eslint/lines-between-class-members](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md)

`Level: error`

This rule requires an empty line after class members.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
class Foo {
  bar() {}
  baz() {}
}
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
class Foo {
  bar() {}

  baz() {}
}
```

### [@typescript-eslint/member-delimiter-style](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md)

`Level: error`

Enforces a consistent member delimiter `Semicolon` style in interfaces and type literals.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
interface Foo {
  // name: string
  // greet(): string
}
type FooBar = {
  // name: string
  // greet(): string
};
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
interface Foo {
  name: string;
  greet(): string;
}
type FooBar = {
  name: string;
  greet(): string;
};
```

### [@typescript-eslint/member-ordering](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md)

`Level: error`

This rule aims to standardize the way class declarations, class expressions, interfaces and type literals are structured and ordered.

```
[
  // Index signature
  "signature",

  // Fields
  "public-static-field",
  "protected-static-field",
  "private-static-field",
  "public-decorated-field",
  "protected-decorated-field",
  "private-decorated-field",
  "public-instance-field",
  "protected-instance-field",
  "private-instance-field",
  "public-abstract-field",
  "protected-abstract-field",
  "private-abstract-field",

  // Constructors
  "public-constructor",
  "protected-constructor",
  "private-constructor",

  // Methods
  "public-static-method",
  "protected-static-method",
  "private-static-method",
  "public-decorated-method",
  "protected-decorated-method",
  "private-decorated-method",
  "public-instance-method",
  "protected-instance-method",
  "private-instance-method",
  "public-abstract-method",
  "protected-abstract-method",
  "private-abstract-method"
]
```

### [@typescript-eslint/method-signature-style](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md)

`Level: error`

A good practice is to use the TypeScript's `strict` option (which implies `strictFunctionTypes`) which enables correct typechecking for function properties only (method signatures get old behavior).

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
interface T1 {
  func(arg: string): number;
}
type T2 = {
  func(arg: boolean): void;
};
interface T3 {
  func(arg: number): void;
  func(arg: string): void;
  func(arg: boolean): void;
}
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
interface T1 {
  func: (arg: string) => number;
}
type T2 = {
  func: (arg: boolean) => void;
};
// this is equivalent to the overload
interface T3 {
  func: ((arg: number) => void) & ((arg: string) => void) & ((arg: boolean) => void);
}
```

### [@typescript-eslint/naming-convention](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md)

`Level: error`

This rule allows you to enforce conventions for any identifier, using granular selectors to create a fine-grained style guide..

#### Enforce that interface names do not begin with an I

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
interface CanDoSomething {
  func(arg: string): number;
}
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
interface ICanDoSomething {
  func(arg: string): number;
}
```

#### Enforce that type parameters (generics) are prefixed with T

```ts
function generic<GenericInput, GenericOutput>(param: GenericInput): GenericOutput {
  return (param as unknown) as GenericOutput;
}
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
function generic<T, R>(param: T): R {
  return (param as unknown) as R;
}
```

#### Enforce that boolean variables are prefixed with an allowed verb `["is", "should", "has", "can", "did", "will"]`

```ts
const paidFor: boolean = true;
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
const isPaidFor: boolean = true;
```

#### Enforce that private class property must prefix with an underscore

```ts
class Foo {
  private canFly: boolean;
}
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
class Foo {
  private _canFly: boolean;
}
```

#### Enforce that static property of class must be UPPERCASE

```ts
class SomeConfigs {
  public static FirstConfig: boolean = false;
}
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
class SomeConfigs {
  public static FIRST_CONFIG: boolean = false;
}
```

### [@typescript-eslint/no-array-constructor](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md)

`Level: error`

This rule disallows Array constructors.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
Array(0, 1, 2);
new Array(0, 1, 2);
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
const arr: number[] = [0, 1, 2];
```

### [@typescript-eslint/no-base-to-string](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md)

`Level: error`

This rule prevents accidentally defaulting to the base Object .toString() method.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
class CustomToString {}

`Value: ${new CustomToString()}`;
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
class CustomToString {
  public toString(): string {
    return 'Hello, world!';
  }
}
`Value: ${new CustomToString()}`;
```

### [@typescript-eslint/no-confusing-non-null-assertion](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md)

`Level: error`

Using a non-null assertion (!) next to an assign or equals check (= or == or ===) creates code that is confusing as it looks similar to a not equals check (!= !==).

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
interface IFoo {
  bar?: string;
  num?: number;
}

const foo: IFoo = {};
const isEqualsBar: boolean = foo.bar! == 'hello';
const isEqualsNum: boolean = 1 + foo.num! == 2;
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
interface IFoo {
  bar?: string;
  num?: number;
}

const foo: IFoo = {};
const isEqualsBar: boolean = foo.bar !== 'hello';
const isEqualsNum: boolean = foo.num !== 2;
```

### [@typescript-eslint/no-confusing-void-expression](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md)

`Level: error`

Returning the results of an expression whose type is void can be misleading. Attempting to do so is likely a symptom of expecting a different return type from a function. Even if used correctly, it can be misleading for other developers, who don't know what a particular function does and if its result matters.

This rule provides automatic fixes for most common cases.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
const response = alert('Are you sure?');
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
alert('Are you sure?');
```

### [@typescript-eslint/no-dupe-class-members](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md)

`Level: error`

This rule is aimed to flag the use of duplicate names in class members.

We also add support for TypeScript's method overload definitions.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
export class Foo {
  public bar(): void {
    // Implementation
  }

  public bar(): void {
    // Implementation
  }
}
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
export class Foo {
  public bar(): void;

  public bar(param?: string): void {
    if (param) {
      console.log(param);
    } else {
      console.log('Nothing');
    }
  }
}
```

### [@typescript-eslint/no-duplicate-imports](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-duplicate-imports.md)

`Level: error`

This rule requires that all imports from a single module exists in a single import statement.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
// import { merge } from 'module';
// import something from 'another-module';
// import { find } from 'module';
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
// import { merge, find } from 'module';
// import something from 'another-module';
```

### [@typescript-eslint/no-dynamic-delete](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dynamic-delete.md)

`Level: error`

Disallow the delete operator with computed key expressions.

Deleting dynamically computed keys can be dangerous and in some cases not well optimized.

![BAD](https://img.shields.io/badge/-BAD-critical)

```// Can be replaced with the constant equivalents, such as container.aaa
delete container['aaa'];
delete container['Infinity'];

// Dynamic, difficult-to-reason-about lookups
const name = 'name';
delete container[name];
delete container[name.toUpperCase()];
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
const container: { [i: string]: number } = {
  /* ... */
};

// Constant runtime lookups by string index
delete container.aaa;

// Constants that must be accessed by []
delete container[7];
delete container['-Infinity'];
```

### [@typescript-eslint/no-empty-function](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md)

`Level: error`

Disallow empty functions

### [@typescript-eslint/no-empty-interface](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md)

`Level: error`

Disallow the declaration of empty interfaces.

An empty interface is equivalent to its supertype. If the interface does not implement a supertype, then the interface is equivalent to an empty object ({}). In both cases it can be omitted.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
// an empty interface
interface Foo {}

// an interface with only one supertype (Bar === Foo)
interface Bar extends Foo {}

// an interface with an empty list of supertypes
interface Baz {}
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
// an interface with any number of members
interface Foo {
  name: string;
}

// same as above
interface Bar {
  age: number;
}

// an interface with more than one supertype
// in this case the interface can be used as a replacement of a union type.
interface Baz extends Foo, Bar {}
```

### [@typescript-eslint/no-explicit-any](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md)

`Level: error`

Disallow usage of the `any` type.

Using the `any` type defeats the purpose of using TypeScript. When `any` is used, all compiler type checks around that value are ignored.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
const age: any = 'seventeen';
const ages: any[] = ['seventeen'];
function greet(): any {}
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
const age: number = 17;
const ages: number[] = [17];
function greet(): string {}
```

### [@typescript-eslint/no-extra-non-null-assertion](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md)

`Level: error`

Disallow extra non-null assertion.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
const foo: { bar: number } | null = null;
const bar = foo!!!.bar;

function foo(bar: number | undefined) {
  const bar: number = bar!!!;
}

function foo(bar?: { n: number }) {
  return bar!?.n;
}
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
const foo: { bar: number } | null = null;
const bar: number | undefined = foo?.bar;

function foo(bar?: { n: number }) {
  return bar?.n;
}
```

### [@typescript-eslint/no-extra-parens](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md)

`Level: error`

Disallow unnecessary parentheses.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
/**
a = (b * c);

(a * b) + c;

for (a in (b, c));

for (a in (b));

for (a of (b));

typeof (a);

(function(){} ? a() : b());
*/
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
(0).toString();

Object.prototype.toString.call();

({}.toString.call());

(function () {} ? a() : b());

/^a$/.test(x);

for (a of (b, c));

for (a of b);

for (a in (b, c));

for (a in b);
```

### [@typescript-eslint/no-extra-semi](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md)

`Level: error`

Disallow unnecessary semicolons.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
/**
var x = 5;;

function foo() {
    // code
};
*/
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
var x = 5;

function foo() {
  // code
}
```

### [@typescript-eslint/no-extraneous-class](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md)

`Level: error`

This rule warns when a class is accidentally used as a namespace.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
class EmptyClass {}

class ConstructorOnly {
  constructor() {
    foo();
  }
}

// Use an object instead:
class StaticOnly {
  static version = 42;
  static hello() {
    console.log('Hello, world!');
  }
}
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
class EmptyClass extends SuperClass {}

class ParameterProperties {
  constructor(public name: string) {}
}

const StaticOnly = {
  version: 42,
  hello() {
    console.log('Hello, world!');
  }
};
```

### [@typescript-eslint/no-floating-promises](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md)

`Level: error`

Requires Promise-like values to be handled appropriately.

This rule forbids usage of Promise-like values in statements without handling their errors appropriately. Unhandled promises can cause several issues, such as improperly sequenced operations, ignored Promise rejections and more. Valid ways of handling a Promise-valued statement include `await`ing, returning, and either calling `.then()` with two arguments or `.catch()` with one argument.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
const promise = new Promise((resolve, reject) => resolve('value'));
promise;

async function returnsPromise() {
  return 'value';
}
returnsPromise().then(() => {});

Promise.reject('value').catch();

Promise.reject('value').finally();
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
const promise = new Promise((resolve, reject) => resolve('value'));
await promise;

async function returnsPromise() {
  return 'value';
}
returnsPromise().then(
  () => {},
  () => {}
);

Promise.reject('value').catch(() => {});

Promise.reject('value').finally(() => {});
```

### [@typescript-eslint/no-for-in-array](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md)

`Level: error`

This rule prohibits iterating over an array with a for-in loop.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
for (const x in [3, 4, 5]) {
  console.log(x);
}
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
for (const x in { a: 3, b: 4, c: 5 }) {
  console.log(x);
}
```

### [@typescript-eslint/no-implicit-any-catch](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md)

`Level: error`

Disallow usage of the implicit `any` type in catch clauses

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
try {
  // ...
} catch (e) {
  // ...
}
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
try {
  // ...
} catch (e: unknown) {
  // ...
}
```

### [@typescript-eslint/no-implied-eval](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md)

`Level: error`

Disallow the use of `eval()`-like methods

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
setTimeout('alert(`Hi!`);', 100);

setInterval('alert(`Hi!`);', 100);

setImmediate('alert(`Hi!`)');

execScript('alert(`Hi!`)');

window.setTimeout('count = 5', 10);

window.setInterval('foo = bar', 10);

const fn = '() = {}';
setTimeout(fn, 100);

const fn = () => {
  return 'x = 10';
};
setTimeout(fn(), 100);

const fn = new Function('a', 'b', 'return a + b');
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
setTimeout(function () {
  alert('Hi!');
}, 100);

setInterval(function () {
  alert('Hi!');
}, 100);

setImmediate(function () {
  alert('Hi!');
});

execScript(function () {
  alert('Hi!');
});

const fn = () => {};
setTimeout(fn, 100);

const foo = {
  fn: function () {}
};
setTimeout(foo.fn, 100);
setTimeout(foo.fn.bind(this), 100);

class Foo {
  static fn = () => {};
}

setTimeout(Foo.fn, 100);
```

### [@typescript-eslint/no-invalid-this](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md)

`Level: error`

Disable this rule to support `typedef` rule.

### [@typescript-eslint/no-inferrable-types](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md)

Disallow this keywords outside of classes or class-like objects.

### [@typescript-eslint/no-invalid-void-type](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-void-type.md)

`Level: error`

Disallows usage of `void` type outside of return types or generic type arguments. If `void` is used as return type, it shouldn’t be a part of intersection/union type with most other types.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
type PossibleValues = string | number | void;
type MorePossibleValues = string | ((number & any) | (string | void));

function logSomething(thing: void) {}
function printArg<T = void>(arg: T) {}

logAndReturn<void>(undefined);

interface Interface {
  lambda: () => void;
  prop: void;
}

class MyClass {
  private readonly propName: void;
}
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
type NoOp = () => void;

function noop(): void {}

let trulyUndefined = void 0;

async function promiseMeSomething(): Promise<void> {}

type stillVoid = void | never;
```

### [@typescript-eslint/no-loop-func](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md)

`Level: error`

Disallow Functions in Loops.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
for (var i = 10; i; i--) {
  (function () {
    return i;
  })();
}

while (i) {
  var a = function () {
    return i;
  };
  a();
}

do {
  function a() {
    return i;
  }
  a();
} while (i);
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
var a = function () {};

for (var i = 10; i; i--) {
  a();
}
```

### [@typescript-eslint/no-loss-of-precision](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md)

`Level: error`

Disallow literal numbers that lose precision.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
const x = 9007199254740993;
const x = 5123000000000000000000000000001;
const x = 1230000000000000000000000.0;
const x = 0.123;
const x = 0x20000000000001;
const x = 0x2_000000000_0001;
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
const x = 12345;
const x = 123.456;
const x = 123e34;
const x = 12300000000000000000000000;
const x = 0x1fffffffffffff;
const x = 9007199254740991;
const x = 9007_1992547409_91;
```

### [@typescript-eslint/no-magic-numbers](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md)

`Level: error`

Disallow magic numbers.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
const dutyFreePrice: number = 100;
const finalPrice: number = dutyFreePrice + dutyFreePrice * 0.25;

const arr: number[] = [1, 2, 3];
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
const tax: number = 0.25;
const dutyFreePrice: number = 100;
const finalPrice: number = dutyFreePrice + dutyFreePrice * tax;

const foo: number = 1;
const baz: number = 2;
const bar: number = 3;
const arr: number[] = [foo, baz, bar];
```

### [@typescript-eslint/no-misused-new](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md)

`Level: error`

Enforce valid definition of `new` and `constructor`.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
class C {
  new(): C;
}

interface I {
  new (): I;
  constructor(): void;
}
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
class C {
  constructor() {}
}
interface I {
  new (): C;
}
```

### [@typescript-eslint/no-misused-promises](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md)

`Level: error`

Avoid using promises in places not designed to handle them.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
const promise = Promise.resolve('value');

if (promise) {
  // Do something
}

const val = promise ? 123 : 456;

while (promise) {
  // Do something
}
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
const promise = Promise.resolve('value');

if (await promise) {
  // Do something
}

const val = (await promise) ? 123 : 456;

while (await promise) {
  // Do something
}
```

### [@typescript-eslint/no-namespace](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md)

`Level: error`

Disallow the use of custom TypeScript modules and namespaces

### [@typescript-eslint/no-non-null-asserted-optional-chain](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md)

`Level: error`

Disallows using a non-null assertion after an optional chain expression.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
foo?.bar!;
foo?.bar()!;

// Prior to TS3.9, foo?.bar!.baz meant (foo?.bar).baz - i.e. the non-null assertion is applied to the entire chain so far.
// For TS3.9 and greater, the non-null assertion is only applied to the property itself, so it's safe.
// The following is incorrect code if you're using less than TS3.9
foo?.bar!.baz;
foo?.bar!();
foo?.bar!().baz;
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
foo?.bar;
(foo?.bar).baz;
foo?.bar();
foo?.bar();
foo?.bar().baz;

// The following is correct code if you're using TS3.9 or greater
foo?.bar!.baz;
foo?.bar!();
foo?.bar!().baz;
```

### [@typescript-eslint/no-non-null-assertion](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md)

`Level: error`

ddddddddddddddddd

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
interface Foo {
  bar?: string;
}

const foo: Foo = getFoo();
const hasBaz: boolean = foo.bar!.includes('baz');
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
interface Foo {
  bar?: string;
}

const foo: Foo = getFoo();
const hasBaz: boolean = foo.bar?.includes('baz') ?? false;
```

### [@typescript-eslint/no-parameter-properties](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md)

`Level: error`

Parameter properties can be confusing to those new to TypeScript as they are less explicit than other ways of declaring and initializing class members.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
class Foo {
  constructor(readonly name: string) {}
}

class Foo {
  constructor(private name: string) {}
}

class Foo {
  constructor(protected name: string) {}
}

class Foo {
  constructor(public name: string) {}
}
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
class Foo {
  constructor(private readonly name: string) {}
}

class Foo {
  constructor(protected readonly name: string) {}
}

class Foo {
  constructor(public readonly name: string) {}
}
```

### [@typescript-eslint/no-redeclare](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md)

`Level: error`

Disallow variable re-declaration.

### [@typescript-eslint/no-require-imports](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md)

`Level: error`

Prefer the newer ES6-style `imports` over `require()`.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
const lib = require('lib');
const lib2 = require('lib2');
const lib5 = require('lib5');
const lib6 = require('lib6');
const lib8 = require('lib8');
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
const lib3 = load('not_an_import');
const lib4 = lib2.subImport;
const lib7 = 700;
// import { l } from 'lib';
// import lib9 = lib2.anotherSubImport;
// import lib10 from 'lib10';
```

### [@typescript-eslint/no-shadow](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md)

`Level: error`

Disallow variable declarations from shadowing variables declared in the outer scope.

### [@typescript-eslint/no-this-alias](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md)

`Level: error`

Allow `const { props, state } = this`; false by default.

Allow `const self = this`; `[]` by default.

### [@typescript-eslint/no-throw-literal](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md)

`Level: error`

Disallow throwing literals as exceptions.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
throw 'error';

throw 0;

throw undefined;

throw null;

const err = new Error();
throw 'an ' + err;

const err = new Error();
throw `${err}`;

const err = '';
throw err;

function err() {
  return '';
}
throw err();

const foo = {
  bar: ''
};
throw foo.bar;
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
throw new Error();

throw new Error("error");

const e = new Error("error");
throw e;

try {
    throw new Error("error");
} catch (e) {
    throw e;
}

const err = new Error();
throw err;

function err() {
  return new Error();
}
throw err();

const foo = {
  bar: new Error();
}
throw foo.bar;

class CustomError extends Error {
  // ...
};
throw new CustomError();
```

### [@typescript-eslint/no-type-alias](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md)

`Level: off`

We will ignore this rule to support various aliases of `type`.

### [@typescript-eslint/no-unnecessary-boolean-literal-compare](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md)

`Level: error`

Flags unnecessary equality comparisons against boolean literals.

Comparing boolean values to boolean literals is unnecessary, those comparisons result in the same booleans. Using the boolean values directly, or via a unary negation (`!value`), is more concise and clearer.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
declare const someCondition: boolean;
if (someCondition === true) {
}

declare const someNullCondition: boolean | null;
if (someNullCondition !== true) {
}
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
declare const someCondition: boolean;
if (someCondition) {
}

declare const someNullCondition: boolean | null;
if (!someNullCondition) {
}
```

### [@typescript-eslint/no-unnecessary-condition](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md)

`Level: error`

Prevents conditionals where the type is always truthy or always falsy.

![BAD](https://img.shields.io/badge/-BAD-critical)

```ts
function head<T>(items: T[]) {
  // items can never be nullable, so this is unnecessary
  if (items) {
    return items[0].toUpperCase();
  }
}

function foo(arg: 'bar' | 'baz') {
  // arg is never nullable or empty string, so this is unnecessary
  if (arg) {
  }
}

function bar<T>(arg: string) {
  // arg can never be nullish, so ?. is unnecessary
  return arg?.length;
}
```

![GOOD](https://img.shields.io/badge/-GOOD-informational)

```ts
function head<T>(items: T[]) {
  // Necessary, since items.length might be 0
  if (items.length) {
    return items[0].toUpperCase();
  }
}

function foo(arg: string) {
  // Necessary, since foo might be ''.
  if (arg) {
  }
}

function bar(arg?: string | null) {
  // Necessary, since arg might be nullish
  return arg?.length;
}
```
