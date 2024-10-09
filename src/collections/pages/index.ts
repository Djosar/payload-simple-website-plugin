import { CollectionConfig } from "payload/dist/exports/types";
import { slugField } from "../../fields/slug-field";
import { blocks } from "../../blocks";
import { Config } from "payload/config";
import { CollectionFactory, SimpleWebsitePluginOptions } from "../../types";

export const Pages: CollectionFactory = (config: Config, opts?: Partial<SimpleWebsitePluginOptions>): CollectionConfig => ({
	slug: 'pages',
	admin: {
		useAsTitle: 'title',
		defaultColumns: [
			'title',
			'slug',
			'updatedAt'
		]
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true,
			localized: !!config.localization
		},
		{
			type: 'tabs',
			tabs: [
				{
					label: 'Content',
					fields: [
						{
							name: 'blocks',
							type: 'blocks',
							blocks: [
								...blocks
							]
						}
					] 
				},
				{
					label: 'SEO',
					fields: []
				}
			]
		},
		slugField(
			'slug',
			'Slug',
			true,
			!!config.localization
		)
	]
});