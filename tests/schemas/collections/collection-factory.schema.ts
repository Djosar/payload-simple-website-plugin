import { Type } from "@sinclair/typebox";
import { PayloadConfigSchema } from "../payload-config.schema";
import { PluginOptionsSchema } from "../plugin-options.schema";
import { CollectionConfigSchema } from "./collection-config.schema";

export const CollectionFactorySchema = Type.Function(
	[PayloadConfigSchema, Type.Optional(PluginOptionsSchema)],
	CollectionConfigSchema
);