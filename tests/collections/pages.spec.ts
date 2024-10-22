import { TypeCompiler } from "@sinclair/typebox/compiler";
import { CollectionConfig } from "payload/dist/exports/types";
import { Pages } from "../../src";
import { PayloadConfigMock } from "../mocks/payload-config.mock";
import { PluginOptionsMock } from "../mocks/plugin-options.mock";
import { CollectionConfigSchema } from "../schemas/collections/collection-config.schema";
import { CollectionFactorySchema } from "../schemas/collections/collection-factory.schema";

const CollectionFactoryValidator = TypeCompiler.Compile(CollectionFactorySchema);
const CollectionConfigValidator = TypeCompiler.Compile(CollectionConfigSchema);


describe('My pages collection factory', () => {
	let config: CollectionConfig;

	beforeAll(() => {
		config = Pages(PayloadConfigMock, PluginOptionsMock);
	});

	it('should be a function', () => {
		expect(typeof Pages).toBe('function');
	});

	it('should be a collection factory', () => {
		const check: boolean = CollectionFactoryValidator.Check(Pages);
		expect(check).toBe(true);
	});

	it('should create a collection config', () => {
		const check: boolean = CollectionConfigValidator.Check(config);
		expect(check).toBe(true);
	});

	it('should specifically create the pages collection', () => {
		expect(config.slug).toBe('pages');
		expect(config.fields.length).toBe(3);
	});

	it('should be in the `content` group', () => {
		expect(config.admin?.group).toBe('content');
	});
});