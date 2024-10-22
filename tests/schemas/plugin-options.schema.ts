import { Type } from "@sinclair/typebox";
import { AccessSchema } from "./util/access.schema";

export const BaseOptionsSchema = Type.Object({
	access: Type.Optional(AccessSchema)
})

export const PluginOptionsSchema = Type.Object({
	collections: Type.Object({
		pages: Type.Intersect([
			Type.Object({
				blocks: Type.Array(
					Type.Object({}),
					{default: []}
				)
			}),
			BaseOptionsSchema
		]),
		media: Type.Optional(Type.Intersect([
			Type.Object({
				directory: Type.Optional(Type.String()),
				url: Type.Optional(Type.String())
			}),
			BaseOptionsSchema
		])),
		navigations: Type.Intersect([
			BaseOptionsSchema
		])
	}),
	globals: Type.Object({
		routingSettings: BaseOptionsSchema
	})
});