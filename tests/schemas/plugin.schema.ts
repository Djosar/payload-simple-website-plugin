import { Type } from "@sinclair/typebox";
import { PayloadConfigSchema } from "./payload-config.schema";

export const PluginSchema = Type.Function([
	PayloadConfigSchema
], Type.Union([
	PayloadConfigSchema,
	Type.Promise(PayloadConfigSchema)
]));