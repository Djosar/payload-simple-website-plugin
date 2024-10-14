import { slugField } from "../../fields/slug-field";
import { Config } from "payload/config";
import { CollectionFactory, SimpleWebsitePluginOptions } from "../../types";
import { baseCollection } from "../collection";

export const Pages: CollectionFactory = (config: Config, opts?: SimpleWebsitePluginOptions) => baseCollection(
	'pages',
	{
		slug: 'pages',
		admin: {
			group: 'content',
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
									...(opts?.collections?.pages.blocks ?? []) 
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
	},
	opts
)
