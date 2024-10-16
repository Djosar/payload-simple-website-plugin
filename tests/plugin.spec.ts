import { simpleWebsitePlugin } from "../src";

describe('My Plugin', () => {
	it('should be a function', () => {
		expect(typeof simpleWebsitePlugin).toBe('function');
	});
});