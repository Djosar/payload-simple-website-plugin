import { Type } from "@sinclair/typebox";

export const AfterChangeHookSchema = Type.Function([
	Type.Object({}, {})
], Type.Any());

export const AfterReadHookSchema = Type.Function([
	Type.Object({}, {})
], Type.Any());

export const BeforeChangeHookSchema = Type.Function([
	Type.Object({}, {})
], Type.Any());

export const BeforeReadHookSchema = Type.Function([
	Type.Object({}, {})
], Type.Any());

export const BeforeValidateHookSchema = Type.Function([
	Type.Object({}, {})
], Type.Any());

export const HooksSchema = Type.Object({
	afterChange: Type.Optional(Type.Array(AfterChangeHookSchema)),
	afterRead: Type.Optional(Type.Array(AfterReadHookSchema)),
	beforeChange: Type.Optional(Type.Array(BeforeChangeHookSchema)),
	beforeRead: Type.Optional(Type.Array(BeforeReadHookSchema)),
	beforeValidate: Type.Optional(Type.Array(BeforeValidateHookSchema)),
});