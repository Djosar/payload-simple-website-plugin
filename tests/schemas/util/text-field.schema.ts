import { Type } from "@sinclair/typebox";

export const TextFieldSchema = Type.Object({
	type: Type.Literal('text'),
	name: Type.String()
});