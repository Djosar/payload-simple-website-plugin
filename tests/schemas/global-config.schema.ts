import { Type } from "@sinclair/typebox";
import { AccessSchema } from "./util/access.schema";
import { HooksSchema } from "./util/hooks.schema";
import { FieldSchema } from "./util/field.schema";

export const GlobalConfigSchema = Type.Object({
	access: AccessSchema,
	slug: Type.String(),
	fields: Type.Array(FieldSchema),
    admin: Type.Optional(Type.Object({})),
    custom: Type.Optional(Type.Record(
		Type.String(),
		Type.Any()
	)),
	typescript: Type.Optional(Type.Object({})),
	hooks: Type.Optional(HooksSchema),
	label: Type.Optional(Type.Union([
		Type.Record(
			Type.String(),
			Type.String()
		),
		Type.String()
	])),
	graphQL: Type.Optional(Type.Union([
		Type.Object({
			name: Type.Optional(Type.String())
		}),
		Type.Boolean({  })
	])),
   /* dbName?: DBIdentifierName;
    endpoints?: Omit<Endpoint, 'root'>[] | false;
    fields: Field[];
    versions?: IncomingGlobalVersions | boolean;*/
});