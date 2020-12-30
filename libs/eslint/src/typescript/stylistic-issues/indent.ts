// COMMENT THE BELOW DISABLED RULES TO SEE THE ERRORS
/* eslint-disable @typescript-eslint/indent */

// "@typescript/eslint/indent": ["error",4,{"SwitchCase":1,"flatTernaryExpressions":false,"ignoredNodes":[]}],
// Enforce consistent indentation
// https://github.com/typescript-eslint/typescript-eslint/blob/v4.10.0/packages/eslint-plugin/docs/rules/indent.md
import { ChangeDetectionStrategy, Component } from "@angular/core";

// BAD
@Component({
    selector: "app-root", // <-- error: use 4 spaces
    changeDetection: ChangeDetectionStrategy.OnPush // <-- error: use 2 tabs
})
export class AppComponent {}

// GOOD
@Component({
  selector: "app-root",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
