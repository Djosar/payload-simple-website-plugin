import { TypeCompiler } from "@sinclair/typebox/compiler";
import { Media } from "../../src";
import { CollectionFactorySchema } from "../schemas/collections/collection-factory.schema";
import { PayloadConfigMock } from "../mocks/payload-config.mock";
import { PluginOptionsMock } from "../mocks/plugin-options.mock";
import { CollectionConfigSchema } from "../schemas/collections/collection-config.schema";
import { CollectionConfig, IncomingUploadType } from "payload/dist/exports/types";

const CollectionFactoryValidator = TypeCompiler.Compile(CollectionFactorySchema);
const CollectionConfigValidator = TypeCompiler.Compile(CollectionConfigSchema);


describe('My media collection factory', () => {
	let config: CollectionConfig;

	beforeAll(() => {
		config = Media(PayloadConfigMock, PluginOptionsMock);
	});

	it('should be a function', () => {
		expect(typeof Media).toBe('function');
	});

	it('should be a collection factory', () => {
		const check: boolean = CollectionFactoryValidator.Check(Media);
		expect(check).toBe(true);
	});

	it('should create a collection config', () => {
		const check: boolean = CollectionConfigValidator.Check(config);
		expect(check).toBe(true);
	});

	it('should specifically create the media collection', () => {
		expect(config.slug).toBe('media');
		expect(config.fields.length).toBe(1);
	});

	it('should have the default staticURL and staticDir when created with empty options', () => {
		expect((config.upload as IncomingUploadType)?.staticURL).toBeDefined();
		expect((config.upload as IncomingUploadType)?.staticURL).toBe('/media');
		expect((config.upload as IncomingUploadType)?.staticDir).toBeDefined();
		expect((config.upload as IncomingUploadType)?.staticDir).toBe('media');
	})
});