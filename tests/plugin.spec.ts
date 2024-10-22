import { TypeCompiler } from '@sinclair/typebox/compiler';
import { simpleWebsitePlugin } from "../src";
import { PluginSchema } from './schemas/plugin.schema';
import { Config, Plugin } from 'payload/config';
import { PayloadConfigMock } from './mocks/payload-config.mock';
import { PluginOptionsMock } from './mocks/plugin-options.mock';
import { CollectionConfig, GlobalConfig } from 'payload/dist/exports/types';

import * as collections from '../src/collections';
import * as globals from '../src/globals';

const collectionFactories = Object.values(collections);
const globalFactories = Object.values(globals);

const pluginSchemaValidator = TypeCompiler.Compile(PluginSchema);

describe('My Plugin', () => {
	let plugin: Plugin;
	let updatedConfig: Config;
	let collections: CollectionConfig[];
	let globals: GlobalConfig[];

	beforeAll(() => {
		plugin = simpleWebsitePlugin(PluginOptionsMock);
		updatedConfig = plugin(PayloadConfigMock) as Config;
		collections = collectionFactories.map(fn => fn(PayloadConfigMock, PluginOptionsMock));
		globals = globalFactories.map(fn => fn(PayloadConfigMock, PluginOptionsMock));
	});

	it('should be a function', () => {
		expect(typeof simpleWebsitePlugin).toBe('function');
	});

	it('should return a payload Plugin', () => {
		const check: boolean = pluginSchemaValidator.Check(plugin);
		expect(check).toBe(true);
	});

	it('should add the correct collections', () => {
		expect(updatedConfig.collections?.length).toBe(3);
		const expectedCollectionSlugs: string[] = collections.map(({ slug }) => slug);
		const actualCollectionNames: string[] = updatedConfig.collections?.map(({slug}) => slug) ?? [];
		expect(actualCollectionNames).toEqual(expectedCollectionSlugs);
	});

	it('should add the correct globals', () => {
		expect(updatedConfig.globals?.length).toBe(1);
		const expectedGlobalSlugs: string[] = globals.map(({slug}) => slug);
		const actualGlobalSlugs: string[] = updatedConfig.globals?.map(({slug}) => slug) ?? [];
		expect(actualGlobalSlugs).toEqual(expectedGlobalSlugs);
	});
});