'use strict';

/**
 * Counts vowels in a given string.
 *
 * @param {string} text - The input string to analyze.
 * @returns {{ total: number, a: number, e: number, i: number, o: number, u: number }}
 *   An object containing the total vowel count and individual counts for each vowel.
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * const { countVowels } = require('vowel-counter-aditya');
 * countVowels('Hello World');
 * // => { total: 3, a: 0, e: 1, i: 0, o: 2, u: 0 }
 */
function countVowels(text) {
  if (typeof text !== 'string') {
    throw new TypeError(
      `Expected a string but received ${typeof text}. ` +
        'Please pass a valid string to countVowels().'
    );
  }

  const result = { total: 0, a: 0, e: 0, i: 0, o: 0, u: 0 };

  const lower = text.toLowerCase();

  for (let i = 0; i < lower.length; i++) {
    const ch = lower[i];
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
      result[ch]++;
      result.total++;
    }
  }

  return result;
}

module.exports = { countVowels };
