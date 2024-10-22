import { formatSlug } from "../../src/fields/slug-field/format-slug";
import { Value } from '@sinclair/typebox/value';
import { FieldHookArgsSchema } from "../schemas/util/field-hook-args.schema";
import { FieldHookArgs } from "payload/dist/exports/types";

const exampleReference: string = 'ref';
const exampleTitle: string = 'Test Page';
const expectedSlug: string = 'test-page';

describe('The slug field', () => {
	describe('uses a format function that', () => {
		let args: FieldHookArgs;
		beforeEach(() => args = Value.Create(FieldHookArgsSchema) as FieldHookArgs);

		it('should return a slug in the correct format given a string value', () => {
			args.value = exampleTitle;
			const result = formatSlug(exampleReference)(args);
			expect(result).toBe(expectedSlug);
		});

		it('should return a slug in the correct format given a referenced field\'s data during a create operation', () => {
			args.operation = 'create';
			args.data = {
				[exampleReference]: exampleTitle
			};
			const result = formatSlug(exampleReference)(args);
			expect(result).toBe(expectedSlug);
		});
	});
});
