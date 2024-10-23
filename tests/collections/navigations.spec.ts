import { TypeCompiler } from "@sinclair/typebox/compiler";
import { Navigations } from "../../src";
import { CollectionFactorySchema } from "../schemas/collections/collection-factory.schema";
import { PayloadConfigMock } from "../mocks/payload-config.mock";
import { PluginOptionsMock } from "../mocks/plugin-options.mock";
import { CollectionConfigSchema } from "../schemas/collections/collection-config.schema";
import { CollectionConfig, IncomingUploadType } from "payload/dist/exports/types";

const CollectionFactoryValidator = TypeCompiler.Compile(CollectionFactorySchema);
const CollectionConfigValidator = TypeCompiler.Compile(CollectionConfigSchema);

describe('My navigations collection factory', () => {
	let config: CollectionConfig;

	beforeAll(() => {
		config = Navigations(PayloadConfigMock, PluginOptionsMock);
	});

	it('should be a function', () => {
		expect(typeof Navigations).toBe('function');
	});

	it('should be a collection factory', () => {
		const check: boolean = CollectionFactoryValidator.Check(Navigations);
		expect(check).toBe(true);
	});

	it('should create a collection config', () => {
		const check: boolean = CollectionConfigValidator.Check(config);
		expect(check).toBe(true);
	});

	it('should specifically create the navigations collection', () => {
		expect(config.slug).toBe('navigations');
		expect(config.fields.length).toBe(2);
	});

	it('should be in the `system` group', () => {
		expect(config.admin?.group).toBe('system');
	});
});