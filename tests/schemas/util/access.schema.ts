import { Type } from "@sinclair/typebox";

export const AccessFunctionSchema = Type.Function(
	[
		Type.Object({})
	],
	Type.Union([
		Type.Boolean(),
		Type.Object({})
	])
);

export const AccessSchema = Type.Object({
	read: Type.Optional(AccessFunctionSchema),
	readDrafts: Type.Optional(AccessFunctionSchema),
	readVersions: Type.Optional(AccessFunctionSchema),
	update: Type.Optional(AccessFunctionSchema)
});