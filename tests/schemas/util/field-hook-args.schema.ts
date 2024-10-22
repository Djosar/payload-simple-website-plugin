import { Type } from "@sinclair/typebox";

export const FieldHookArgsSchema = Type.Object({
	operation: Type.String(),
	data: Type.Optional(Type.Object({})),
	originalDoc: Type.Optional(Type.Object({}))
});