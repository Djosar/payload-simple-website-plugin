import { Config } from "payload/config";
import { CollectionConfig } from "payload/dist/exports/types";
import { CollectionFactory, SimpleWebsitePluginOptions } from "../../types";

export const Media: CollectionFactory = (_: Config, opts?: Partial<SimpleWebsitePluginOptions>): CollectionConfig => ({
	slug: 'media',
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
})