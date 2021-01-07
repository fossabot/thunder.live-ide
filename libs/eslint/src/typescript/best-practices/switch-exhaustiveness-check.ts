// COMMENT THE DISABLED ESLINT RULES BELOW TO SEE MORE ERRORS
/* eslint-disable @typescript-eslint/switch-exhaustiveness-check */

// "@typescript/eslint/switch-exhaustiveness-check": ["error"],
// Exhaustiveness checking in switch with union type
// https://github.com/typescript-eslint/typescript-eslint/blob/v4.10.0/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md

enum WorkingDay {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday'
}

const getWorkingDay = (): WorkingDay | undefined => undefined;
const workingDay: WorkingDay | undefined = getWorkingDay();

// BAD
switch (workingDay) {
  case WorkingDay.Monday:
    // Do something
    break;
  case WorkingDay.Tuesday:
    // Do something
    break;  // <= Bad, not cover all cases of WorkingDay
}

// GOOD
switch (workingDay) {
  case WorkingDay.Monday:
    // Do something
    break;
  case WorkingDay.Tuesday:
    // Do something
    break;
  case WorkingDay.Wednesday:
    // Do something
    break;
  case WorkingDay.Thursday:
    // Do something
    break;
  case WorkingDay.Friday:
    // Do something
    break;
  case undefined:
    // Do something
    break;
}

switch (workingDay) {
  case WorkingDay.Monday:
    // Do something
    break;
  default: // <= add a default case
    // Do something
    break;
}
