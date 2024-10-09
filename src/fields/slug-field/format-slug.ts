import { FieldHook } from "payload/dist/exports/types";

const format = (val: string) => val.trim().replaceAll(' ', '-').toLowerCase();

export const formatSlug = (reference: string): FieldHook => ({ operation, value, data, originalDoc }) => {
	if (typeof value === 'string') {
		return format(value);
	}

	if (operation === 'create') {
		const d = data?.[reference] || originalDoc?.[reference];
		if (!!d && typeof d === 'string') {
			return format(d)
		}
	}

	return value;
} 
