// COMMENT THE DISABLED ESLINT RULES BELOW TO SEE MORE ERRORS
/* eslint-disable @typescript-eslint/prefer-regexp-exec */

// "@typescript/eslint/prefer-regexp-exec": ["error"],
// Enforce that `RegExp#exec` is used instead of `String#match` if no global flag is provided
// https://github.com/typescript-eslint/typescript-eslint/blob/v4.10.0/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md


// Bad
'some text'.match(/text/);
'some text are just texts'.match(/text/);

// Good
/text/.exec('some text');
'some text are just texts'.match(/text/g);

// When using String.match() without flag 'g'
// It return the same output with RegExp.exec() but it takes a large amount performance

