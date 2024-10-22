/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
	preset: 'ts-jest',
	clearMocks: true,
	coverageProvider: "v8",
	testEnvironment: 'node',
	testMatch: [
		'**/tests/**/*.spec.ts'
	]
};

export default config;
