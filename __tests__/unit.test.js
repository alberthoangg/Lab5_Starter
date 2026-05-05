// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('validates a phone number with parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('validates a phone number with dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('rejects a phone number without separators', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('rejects a phone number with letters', () => {
  expect(isPhoneNumber('phone-number')).toBe(false);
});

test('validates a simple email address', () => {
  expect(isEmail('student@example.com')).toBe(true);
});

test('validates another simple email address', () => {
  expect(isEmail('name@test.edu')).toBe(true);
});

test('rejects an email address without an at sign', () => {
  expect(isEmail('student.example.com')).toBe(false);
});

test('rejects an email address with a one-letter top-level domain', () => {
  expect(isEmail('student@example.c')).toBe(false);
});

test('validates a strong password with the minimum length', () => {
  expect(isStrongPassword('Abcd')).toBe(true);
});

test('validates a strong password with numbers and underscores', () => {
  expect(isStrongPassword('a_123456')).toBe(true);
});

test('rejects a password that starts with a number', () => {
  expect(isStrongPassword('1abc')).toBe(false);
});

test('rejects a password that is too short', () => {
  expect(isStrongPassword('Ab1')).toBe(false);
});

test('validates a date with one-digit month and day', () => {
  expect(isDate('1/2/2024')).toBe(true);
});

test('validates a date with two-digit month and day', () => {
  expect(isDate('12/31/2024')).toBe(true);
});

test('rejects a date with dashes', () => {
  expect(isDate('2024-01-01')).toBe(false);
});

test('rejects a date with a two-digit year', () => {
  expect(isDate('1/2/24')).toBe(false);
});

test('validates a three-character hex color', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('validates a six-character hex color without a hash', () => {
  expect(isHexColor('A1b2C3')).toBe(true);
});

test('rejects a hex color with invalid characters', () => {
  expect(isHexColor('#ggg')).toBe(false);
});

test('rejects a hex color with invalid length', () => {
  expect(isHexColor('#12345')).toBe(false);
});
