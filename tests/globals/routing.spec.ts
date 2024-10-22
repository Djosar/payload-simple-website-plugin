import { TypeCompiler } from "@sinclair/typebox/compiler";
import { RoutingSettings } from "../../src";
import { GlobalFactorySchema } from "../schemas/globals/global-factory.schema";
import { PayloadConfigMock } from "../mocks/payload-config.mock";
import { PluginOptionsMock } from "../mocks/plugin-options.mock";
import { GlobalConfigSchema } from "../schemas/globals/global-config.schema";

const globalConfigFactoryValidator = TypeCompiler.Compile(GlobalFactorySchema);
const globalConfigValidator = TypeCompiler.Compile(GlobalConfigSchema);

describe('My routing settings global factory', () => {
	it('should be a function', () => {
		expect(typeof RoutingSettings).toBe('function');
	});

	it('should be a global config factory', () => {
		const check = globalConfigFactoryValidator.Check(RoutingSettings);
		expect(check).toBe(true);
	});

	it('should create a settings global config', () => {
		const config = RoutingSettings(
			PayloadConfigMock,
			PluginOptionsMock
		);
		const check = globalConfigValidator.Check(config);
		expect(check).toBe(true);
		expect(config.admin?.group).toBeDefined();
		expect(config.admin!.group).toBe('settings');
	})

	it('should create the routing settings global config', () => {
		const config = RoutingSettings(
			PayloadConfigMock,
			PluginOptionsMock
		);
		expect(config.slug).toBe('routing');
		expect(config.fields.length).toBe(2);
	});
});