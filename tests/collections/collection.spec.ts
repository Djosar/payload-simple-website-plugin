import { Value } from "@sinclair/typebox/value";
import { TypeCompiler } from "@sinclair/typebox/compiler";
import { SimpleWebsitePluginOptions } from "../../src";
import { baseCollection } from "../../src/collections/collection";
import { CollectionConfigSchema } from "../schemas/collections/collection-config.schema";
import { CollectionConfig } from "payload/dist/exports/types";

const collectionKey: string = 'ref';
const collectionConfigValidator = TypeCompiler.Compile(CollectionConfigSchema);

describe('My base collection factory', () => {
	it('should be a function', () => {
		expect(typeof baseCollection).toBe('function');
	});

	it('should create a collection config with an empy admin object given empty options', () => {
		const opts = {
			collections: {
				[collectionKey]: {}
			}
		} as SimpleWebsitePluginOptions;
		const config = Value.Create(CollectionConfigSchema) as CollectionConfig;
		const updatedConfig = baseCollection(
			collectionKey as keyof SimpleWebsitePluginOptions['collections'],
			config,
			opts
		);

		expect(updatedConfig.access).toBeDefined();
	});

	it('should return a collection config', () => {
		const opts = {
			collections: {
				[collectionKey]: {}
			}
		} as SimpleWebsitePluginOptions;
		const config = Value.Create(CollectionConfigSchema) as CollectionConfig;
		const updatedConfig = baseCollection(
			collectionKey as keyof SimpleWebsitePluginOptions['collections'],
			config,
			opts
		);

		const check = collectionConfigValidator.Check(updatedConfig);
		expect(check).toBe(true);
	});
});