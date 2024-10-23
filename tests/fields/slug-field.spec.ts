import { formatSlug } from "../../src/fields/slug-field/format-slug";
import { Value } from '@sinclair/typebox/value';
import { FieldHookArgsSchema } from "../schemas/util/field-hook-args.schema";
import { FieldHookArgs, TextField } from "payload/dist/exports/types";
import { slugField } from "../../src";
import { TypeCompiler } from "@sinclair/typebox/compiler";
import { TextFieldSchema } from "../schemas/util/text-field.schema";

const exampleReference: string = 'ref';
const exampleTitle: string = 'Test Page';
const expectedSlug: string = 'test-page';

const fieldName: string = 'slug-field';
const fieldLabel: string = 'Slug field label';
const fieldRequired: boolean = true;
const fieldLocalized: boolean = false;
const fieldReference: string = 'test-ref';
const slugFieldSchemaValidator = TypeCompiler.Compile(TextFieldSchema);

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

	it('should be a function', () => {
		expect(typeof slugField).toBe('function')
	});

	it('should return a text field', () => {
		const field = slugField(
			fieldName,
			fieldLabel,
			fieldRequired,
			fieldLocalized,
			fieldReference
		) as TextField;
		const check = slugFieldSchemaValidator.Check(field);
		expect(check).toBe(true);
		expect(field.name).toEqual(fieldName)
	})
});
