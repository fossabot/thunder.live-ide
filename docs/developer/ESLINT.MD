# TypeScript ESLint Strict Rules

Monorepo for all the tooling which enables ESLint to support TypeScript.

"OUR PLACE, OUR RULES"

Each rule was carefully reviewed. So DON'T BLAME THE STRICT RULES because they really make us have better thinkings in coding practice and review process, They are also helpful for future maintenance.

### [@typescript-eslint/adjacent-overload-signatures](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md)

`Level: error`

Require that member overloads be consecutive. <br />
Grouping overloaded members together can improve readability of the code.

`Bad`

```ts
class Foo {
  foo(s: string): void;
  foo(n: number): void;
  bar(): void {} // <-- error occurs
  foo(sn: string | number): void {}
}
```

`Good`

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

`Bad`

```ts
const x: Array<string> = ['a', 'b'];
const y: ReadonlyArray<string> = ['a', 'b'];
```

`Good`

```ts
const x: string[] = ['a', 'b'];
const y: readonly string[] = ['a', 'b'];
```

### [@typescript-eslint/await-thenable](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md)

`Level: error`

Disallows awaiting a value that is not a Thenable.

`Bad`

```ts
await 'value';

const createValue = () => 'value';
await createValue();
```

`Good`

```ts
await Promise.resolve('value');

const createValue = async () => 'value';
await createValue();
```

### [@typescript-eslint/ban-ts-comment](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md)

`Level: error`

Disallows the use of "@ts-ignore", "ts-nocheck".

`Bad`

```ts
if (false) {
  // @ts-ignore: Unreachable code error
  console.log('hello');
}
```

`Good`

```ts
if (false) {
  // Compiler warns about unreachable code error
  console.log('hello');
}
```

### [@typescript-eslint/ban-tslint-comment](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-tslint-comment.md)

`Level: error`

Bans // tslint:<rule-flag> comments from being used.

`Bad`

```ts
/* tslint:disable */
/* tslint:enable */
/* tslint:disable:rule1 rule2 rule3... */
/* tslint:enable:rule1 rule2 rule3... */
// tslint:disable-next-line
someCode(); // tslint:disable-line
// tslint:disable-next-line:rule1 rule2 rule3...
```

`Good`

```ts
// This is a comment that just happens to mention tslint
```

### [@typescript-eslint/ban-types](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md)

`Level: error`

Bans String, Object, Boolean, Number, object... types from being used.

`Bad`

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

`Good`

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

`Bad`

```ts
function foo() {
  return true;
}

if (foo) {
  bar();
}
```

`Good`

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

`Bad`

```ts
public get numberOfMembers() {
  return 10;
}
```

`Good`

```ts
public readonly numberOfMembers = 10;
```

### [@typescript-eslint/comma-dangle](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md)

`Level: error`

Disallows trailing commas.

`Bad`

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

`Good`

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

`Bad`

```ts
// const scores: number[] = [1 ,2 , 3]; <-- error
```

`Good`

```ts
const scores: number[] = [1, 2, 3];
```

### [@typescript-eslint/consistent-indexed-object-style](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md)

`Level: error`

TypeScript supports defining object show keys can be flexible using an index signature. TypeScript also has a builtin type named Record to create an empty object defining only an index signature.

`Bad`

```ts
interface Foo {
  [key: string]: unknown;
}

type Foo = {
  [key: string]: unknown;
};
```

`Good`

```ts
type Foo = Record<string, unknown>;
```

### [@typescript-eslint/consistent-type-assertions](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md)

`Level: error`

This rule aims to standardize the use of type assertion style across the codebase.

> - You must always use `param as T` instead of `<T>param`
> - Always prefer const `x: T = { ... };` to `const x = { ... } as T`;
> - Casting to `unknown` is allowed.

`Bad`

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

`Good`

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

`Bad`

```ts
import type { Foo } from 'Foo';
import type Bar from 'Bar';
type T = Foo;
const x: Bar = 1;

type T = import('Foo').Foo;
const x: import('Bar') = 1;
```

`Good`

```ts
import * as bar from 'Bar';
import { Foo } from 'Foo';
type T = Foo;
const x: bar.config = 1;
```

### [@typescript-eslint/dot-notation](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md)

`Level: error`

In JavaScript, one can access properties using the dot notation (foo.bar) or square-bracket notation (foo["bar"]). However, the dot notation is often preferred because it is easier to read, less verbose, and works better with aggressive JavaScript minimizers.

`Bad`

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

`Good`

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

`Bad`

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

`Good`

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

`Bad`

```ts
// fn ();

// fn
// ();
```

`Good`

```ts
fn();

fn();
```

### [@typescript-eslint/indent](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md)

`Level: error`

This rule enforces a consistent indentation style. The default style is 2 spaces.

`Bad`

```ts
if (a) {
  /*tab*/ b = c;
  /*tab*/ function foo(d) {
    /*tab*/ /*tab*/ e = f;
    /*tab*/
  }
}
```

`Good`

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

`Bad`

```ts
class Foo {
  public bar: string;
  private baz: number;
}
```

`Good`

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

`Bad`

```ts
class Foo {
  bar() {}
  baz() {}
}
```

`Good`

```ts
class Foo {
  bar() {}

  baz() {}
}
```

### [@typescript-eslint/member-delimiter-style](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md)

`Level: error`

Enforces a consistent member delimiter `Semicolon` style in interfaces and type literals.

`Bad`

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

`Good`

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

`Bad`

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

`Good`

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

`Bad`

```ts
interface CanDoSomething {
  func(arg: string): number;
}
```

`Good`

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

`Good`

```ts
function generic<T, R>(param: T): R {
  return (param as unknown) as R;
}
```

#### Enforce that boolean variables are prefixed with an allowed verb `["is", "should", "has", "can", "did", "will"]`

```ts
const paidFor: boolean = true;
```

`Good`

```ts
const isPaidFor: boolean = true;
```

#### Enforce that private class property must prefix with an underscore

```ts
class Foo {
  private canFly: boolean;
}
```

`Good`

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

`Good`

```ts
class SomeConfigs {
  public static FIRST_CONFIG: boolean = false;
}
```

### [@typescript-eslint/no-array-constructor](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md)

`Level: error`

This rule disallows Array constructors.

`Bad`

```ts
Array(0, 1, 2);
new Array(0, 1, 2);
```

`Good`

```ts
const arr: number[] = [0, 1, 2];
```

### [@typescript-eslint/no-base-to-string](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md)

`Level: error`

This rule prevents accidentally defaulting to the base Object .toString() method.

`Bad`

```ts
class CustomToString {}

`Value: ${new CustomToString()}`;
```

`Good`

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

`Bad`

```ts
interface IFoo {
  bar?: string;
  num?: number;
}

const foo: IFoo = {};
const isEqualsBar: boolean = foo.bar! == 'hello';
const isEqualsNum: boolean = 1 + foo.num! == 2;
```

`Good`

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

`Bad`

```ts
const response = alert('Are you sure?');
```

`Good`

```ts
alert('Are you sure?');
```

### [@typescript-eslint/no-dupe-class-members](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md)

`Level: error`

This rule is aimed to flag the use of duplicate names in class members.

We also add support for TypeScript's method overload definitions.

`Bad`

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

`Good`

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

`Bad`

```ts
// import { merge } from 'module';
// import something from 'another-module';
// import { find } from 'module';
```

`Good`

```ts
// import { merge, find } from 'module';
// import something from 'another-module';
```
