import { TypeCompiler } from "@sinclair/typebox/compiler";
import { settingsGlobal } from "../../src/globals/settings/settings";
import { GlobalConfigSchema } from "../schemas/globals/global-config.schema";
import { Value } from "@sinclair/typebox/value";
import { GlobalConfig } from "payload/dist/exports/types";

const globalConfigValidator = TypeCompiler.Compile(GlobalConfigSchema);

describe('My settings global factory', () => {
	it('should be a function', () => {
		expect(typeof settingsGlobal).toBe('function');
	});

	it('should create a global config', () => {
		const config = Value.Create(GlobalConfigSchema) as unknown as GlobalConfig;
		const updatedConfig = settingsGlobal(config);
		const check = globalConfigValidator.Check(updatedConfig)
		expect(check).toBe(true);
	});

	it('should create a global config with the group `settings`', () => {
		const config = Value.Create(GlobalConfigSchema) as unknown as GlobalConfig;
		const updatedConfig = settingsGlobal(config);
		expect(updatedConfig.admin?.group).toBeDefined();
		expect(updatedConfig.admin!.group).toBe('settings');
	});
});