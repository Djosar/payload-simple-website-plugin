import { CollectionConfig } from "payload/dist/exports/types";
import { CollectionFactory } from "../../types";
import { baseCollection } from "../collection";

export const Media: CollectionFactory = (config, opts): CollectionConfig => baseCollection(
	'media',
	{
		slug: 'media',
		admin: {
			group: 'content'
		},
		upload: {
			staticURL: opts?.collections?.media?.url ?? '/media',
			staticDir: opts?.collections?.media?.directory ?? 'media'
		},
		fields: [
			{
				name: 'alt',
				type: 'text',
				required: true
			}
		]
	},
	opts
)