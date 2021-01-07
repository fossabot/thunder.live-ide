// COMMENT THE DISABLED ESLINT RULES BELOW TO SEE MORE ERRORS
/* eslint-disable @typescript-eslint/indent */

// "@typescript/eslint/indent": ["error",4,{"SwitchCase":1,"flatTernaryExpressions":false,"ignoredNodes":[]}],
// Enforce consistent indentation
// https://github.com/typescript-eslint/typescript-eslint/blob/v4.10.0/packages/eslint-plugin/docs/rules/indent.md
import { ChangeDetectionStrategy, Component } from '@angular/core';

// BAD
@Component({
    selector: 'app-root', // <-- error: use 4 spaces
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush // <-- error: use 2 tabs
})
export class BadComponent {}

// GOOD
@Component({
  selector: 'app-root',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodComponent {}
