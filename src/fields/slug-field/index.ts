import { Field, TextField } from "payload/dist/exports/types";
import { formatSlug } from "./format-slug";

export const slugField = (
	name: TextField['name'],
	label: TextField['label'],
	required: TextField['required'],
	localized: TextField['localized'],
	reference: string = 'title'
): Field => ({
	type: 'text',
	unique: true,
	admin: {
		position: 'sidebar'
	},
	index: true,
	name,
	required,
	label,
	localized,
	hooks: {
		beforeValidate: [
			formatSlug(reference)
		]
	}
})