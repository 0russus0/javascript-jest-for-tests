import { describe, expect, test } from '@jest/globals';
import {
	addition,
	multiplication,
	soustraction,
	verifString,
	reverseString,
	capitalized,
	fToC,
} from './ex0';

describe('lesTests', () => {
	// --- addition ---
	test('adds 1 + 2 to equal 3', () => {
		expect(addition(1, 2)).toBe(3);
	});
	// --- soustraction ---
	test('adds 3 - 2 to equal 1', () => {
		expect(soustraction(3, 2)).toBe(1);
	});
	// --- multiplication ---
	test('adds 2 * 3 to equal 6', () => {
		expect(multiplication(2, 3)).toEqual(6);
	});
	// --- verifString ---
	test('coucou le test', () => {
		expect(verifString('coucou le test', 'le test')).toBe(true);
	});
	// --- verifString ---
	test('coucou le test', () => {
		expect(verifString('coucou le test', 'zerzr')).toBe(false);
	});
	// --- reverseString ---
	test('renversant', () => {
		expect(reverseString('youpi')).toEqual(false);
	});
	test('renversant', () => {
		expect(reverseString('hannah')).toEqual(true);
	});
	// --- capitalized ---
	test('renversant', () => {
		expect(capitalized('hanna')).toEqual(true);
	});

	test('from Fahrenheit to Celsius', () => {
		expect(fToC(45)).toEqual(7.222222222222222);
	});
});
