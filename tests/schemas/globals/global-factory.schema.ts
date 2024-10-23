import { Type } from "@sinclair/typebox";
import { GlobalConfigSchema } from "./global-config.schema";
import { PayloadConfigSchema } from "../payload-config.schema";
import { PluginOptionsSchema } from "../plugin-options.schema";

export const GlobalFactorySchema = Type.Function(
	[PayloadConfigSchema, Type.Optional(PluginOptionsSchema)],
	GlobalConfigSchema
);