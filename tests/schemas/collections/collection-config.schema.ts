import { Type } from "@sinclair/typebox";
import { FieldSchema } from "../util/field.schema";

export const CollectionConfigSchema = Type.Object({
	slug: Type.String(),
	fields: Type.Array(FieldSchema)
});