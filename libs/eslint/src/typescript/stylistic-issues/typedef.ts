// COMMENT THE DISABLED ESLINT RULES BELOW TO SEE MORE ERRORS
// /* eslint-disable @typescript-eslint/typedef */

// "@typescript/eslint/typedef": ["error",{"arrayDestructuring":false,"arrowParameter":false,"memberVariableDeclaration":false,"objectDestructuring":false,"parameter":false,"propertyDeclaration":false,"variableDeclaration":false,"variableDeclarationIgnoreFunction":false}],
// Requires type annotations to exist
// https://github.com/typescript-eslint/typescript-eslint/blob/v4.10.0/packages/eslint-plugin/docs/rules/typedef.md

// BAD: Array destructuring
export const [a] = [1];
export const [b, c] = [1, 2];

// GOOD: Array destructuring
export const [x]: [number] = [1];
export const [y, z]: [boolean, string] = [true, 'text'];
for (const [key, val] of new Map([['key', 1]])) {
  console.log(key, val);
}


// BAD: Arrow parameter
export const badArrFunc: (size: number) => void = size => {
  console.log(size);
};
['hello', 'world'].map(text => text.length);
export const mapper = {
  map: text => text + '...'
};

// GOOD: Arrow parameter
export const goodArrFunc = (size: number) => {
  console.log(size);
};


