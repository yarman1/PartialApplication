'use strict';

// Check 4 digit pin.
const EXPECTED_PIN = '4967';
const checkPin = (...code) => code.join('') === EXPECTED_PIN;

// Impement function press
// that allows to enter pin code by one character,
// e.g. press('3').press('4').press('5').press('6')
//
// For hint use https://github.com/HowProgrammingWorks/Cheatsheet

const press = (firstChar) => ({
  code: [firstChar],
  press(character) {
    this.code.push(character);
    if (this.code.length === 4) return checkPin(...this.code);
    return this;
  }
});

module.exports = { press };
