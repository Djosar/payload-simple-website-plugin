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
	read: AccessFunctionSchema,
	readDrafts: AccessFunctionSchema,
	readVersions: AccessFunctionSchema,
	update: AccessFunctionSchema
});