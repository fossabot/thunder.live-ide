// COMMENT THE DISABLED ESLINT RULES BELOW TO SEE MORE ERRORS
/* eslint-disable @typescript-eslint/no-dupe-class-members */

// "@typescript/eslint/no-dupe-class-members": ["error"],
// Disallow duplicate class members
// https://github.com/typescript-eslint/typescript-eslint/blob/v4.10.0/packages/eslint-plugin/docs/rules/no-dupe-class-members.md

// BAD
export class FirstFooDupe {
  // @ts-expect-error: Expect error occurs
  public bar(): void {
    console.log('go to bar 01');
  }

  // @ts-expect-error: Expect error occurs
  public bar(): void {
    console.log('go to bar 02');
  }
}

export class SecondFooDupe {
  private _bar: string = '';

  // @ts-expect-error: Expect error occurs
  public get bar(): string {
    return this._bar;
  }

  // @ts-expect-error: Expect error occurs
  public bar(value: string): void {
    this._bar = value;
  }
}

export class ThirdFooDupe {
  private readonly _bar: string = '';

  // @ts-expect-error: Expect error occurs
  public static bar(): void {
    console.log('go to bar 01');
  }

  // @ts-expect-error: Expect error occurs
  public static bar(): void {
    console.log('go to bar 02');
  }
}

// GOOD
export class FirstFooNoDupe {
  public firstBar(): void {
    console.log('go to bar 01');
  }

  public secondBar(): void {
    console.log('go to bar 02');
  }
}

export class SecondFooNoDupe {
  private _bar: string = '';

  public get bar(): string {
    return this._bar;
  }

  public set bar(value: string) {
    this._bar = value;
  }
}

export class ThirdFooNoDupe {
  public static bar(): void {
    console.log('go to bar 01');
  }

  public bar(): void {
    console.log('go to bar 02');
  }
}
