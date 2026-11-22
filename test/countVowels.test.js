'use strict';

const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { countVowels } = require('../src/index');

// ─── Helper ──────────────────────────────────────────────────────────────────
function expectResult(input, expected) {
  const result = countVowels(input);
  assert.deepStrictEqual(result, expected);
}

// ─── Tests ───────────────────────────────────────────────────────────────────

describe('countVowels()', () => {
  // ── Normal strings ──────────────────────────────────────────────────────
  it('should count vowels in a normal sentence', () => {
    expectResult('Hello World', { total: 3, a: 0, e: 1, i: 0, o: 2, u: 0 });
  });

  it('should count vowels in a simple word', () => {
    expectResult('education', { total: 5, a: 1, e: 1, i: 1, o: 1, u: 1 });
  });

  // ── Case handling ───────────────────────────────────────────────────────
  it('should handle uppercase strings', () => {
    expectResult('HELLO', { total: 2, a: 0, e: 1, i: 0, o: 1, u: 0 });
  });

  it('should handle lowercase strings', () => {
    expectResult('hello', { total: 2, a: 0, e: 1, i: 0, o: 1, u: 0 });
  });

  it('should handle mixed-case strings', () => {
    expectResult('HeLLo WoRLd', { total: 3, a: 0, e: 1, i: 0, o: 2, u: 0 });
  });

  // ── Strings with numbers ────────────────────────────────────────────────
  it('should ignore numbers and count only vowels', () => {
    expectResult('h3ll0 w0rld 123', { total: 0, a: 0, e: 0, i: 0, o: 0, u: 0 });
  });

  it('should count vowels mixed with numbers', () => {
    expectResult('a1e2i3o4u5', { total: 5, a: 1, e: 1, i: 1, o: 1, u: 1 });
  });

  // ── Special characters ──────────────────────────────────────────────────
  it('should ignore special characters', () => {
    expectResult('!@#$%^&*()', { total: 0, a: 0, e: 0, i: 0, o: 0, u: 0 });
  });

  it('should count vowels among special characters', () => {
    expectResult('h@e#l$l%o!', { total: 2, a: 0, e: 1, i: 0, o: 1, u: 0 });
  });

  // ── Empty strings ──────────────────────────────────────────────────────
  it('should return all zeros for an empty string', () => {
    expectResult('', { total: 0, a: 0, e: 0, i: 0, o: 0, u: 0 });
  });

  // ── Strings without vowels ─────────────────────────────────────────────
  it('should return all zeros for consonants-only strings', () => {
    expectResult('bcdfghjklmnpqrstvwxyz', { total: 0, a: 0, e: 0, i: 0, o: 0, u: 0 });
  });

  // ── All vowels ─────────────────────────────────────────────────────────
  it('should count a string of all vowels', () => {
    expectResult('aeiou', { total: 5, a: 1, e: 1, i: 1, o: 1, u: 1 });
  });

  it('should count repeated vowels', () => {
    expectResult('aaaeee', { total: 6, a: 3, e: 3, i: 0, o: 0, u: 0 });
  });

  // ── Whitespace and tabs ────────────────────────────────────────────────
  it('should ignore whitespace', () => {
    expectResult('   ', { total: 0, a: 0, e: 0, i: 0, o: 0, u: 0 });
  });

  it('should count vowels around whitespace', () => {
    expectResult('  a  e  ', { total: 2, a: 1, e: 1, i: 0, o: 0, u: 0 });
  });

  // ── Unicode / Accented characters ──────────────────────────────────────
  it('should ignore accented vowels (treats only plain a-u as vowels)', () => {
    expectResult('café résumé', { total: 2, a: 1, e: 0, i: 0, o: 0, u: 1 });
  });

  // ── Invalid input types ────────────────────────────────────────────────
  it('should throw TypeError for number input', () => {
    assert.throws(() => countVowels(123), {
      name: 'TypeError',
      message: /Expected a string but received number/,
    });
  });

  it('should throw TypeError for null input', () => {
    assert.throws(() => countVowels(null), {
      name: 'TypeError',
      message: /Expected a string but received object/,
    });
  });

  it('should throw TypeError for undefined input', () => {
    assert.throws(() => countVowels(undefined), {
      name: 'TypeError',
      message: /Expected a string but received undefined/,
    });
  });

  it('should throw TypeError for boolean input', () => {
    assert.throws(() => countVowels(true), {
      name: 'TypeError',
      message: /Expected a string but received boolean/,
    });
  });

  it('should throw TypeError for array input', () => {
    assert.throws(() => countVowels(['hello']), {
      name: 'TypeError',
      message: /Expected a string but received object/,
    });
  });

  it('should throw TypeError for object input', () => {
    assert.throws(() => countVowels({ text: 'hello' }), {
      name: 'TypeError',
      message: /Expected a string but received object/,
    });
  });

  it('should throw TypeError when called with no arguments', () => {
    assert.throws(() => countVowels(), {
      name: 'TypeError',
      message: /Expected a string but received undefined/,
    });
  });
});
