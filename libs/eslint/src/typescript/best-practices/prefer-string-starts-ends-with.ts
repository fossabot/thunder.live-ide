// Bypass these rules to focus on the example
/* eslint-disable @typescript-eslint/prefer-regexp-exec */
/* eslint-disable @thunder-angular/no-magic-numbers */
/* eslint-disable @typescript-eslint/no-unused-expressions */

// COMMENT THE DISABLED ESLINT RULES BELOW TO SEE MORE ERRORS
/* eslint-disable @typescript-eslint/prefer-string-starts-ends-with */

// "@typescript/eslint/prefer-string-starts-ends-with": ["error"],
// Enforce the use of `String#startsWith` and `String#endsWith` instead of other equivalent methods of checking substrings
// https://github.com/typescript-eslint/typescript-eslint/blob/v4.10.0/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md


const stringVariable: string = '';

// BAD

// Check string starts with
stringVariable[0] === 'b';
stringVariable.charAt(0) === 'b';
stringVariable.indexOf('text') === 0;
stringVariable.slice(0, 3) === 'text';
stringVariable.substring(0, 3) === 'text';
stringVariable.match(/^text/) != null;
/^text/.test(stringVariable);

// Check string ends with
stringVariable[stringVariable.length - 1] === 'b';
stringVariable.charAt(stringVariable.length - 1) === 'b';
stringVariable.lastIndexOf('text') === stringVariable.length - 3;
stringVariable.slice(-3) === 'text';
stringVariable.substring(stringVariable.length - 3) === 'text';
stringVariable.match(/text$/) != null;
/text$/.test(stringVariable);

// GOOD
stringVariable.startsWith('text');
stringVariable.endsWith('text');
