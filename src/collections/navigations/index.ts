import { CollectionFactory } from "../../types";
import { baseCollection } from "../collection";

export const Navigations: CollectionFactory = (config, opts) => baseCollection(
	'navigations',
	{
		slug: 'navigations',
		admin: {
			group: 'system'
		},
		fields: [
			{
				name: 'position',
				type: 'text',
				required: true
			},
			{
				name: 'items',
				type: 'array',
				fields: [
					{
						name: 'settings',
						type: 'group',
						fields: [
							{
								name: 'type',
								type: 'select',
								admin: {
									width: '50%'
								},
								required: true,
								options: [
									{
										label: 'Internal Link',
										value: 'internal'
									},
									{
										label: 'URL',
										value: 'url'
									}
								]
							},
							{
								name: 'newTab',
								type: 'checkbox',
								admin: {
									width: '50%'
								},
							},
						]
					},
					{
						name: 'label',
						type: 'text',
						required: true
					},
					{
						type: 'relationship',
						name: 'targetPage',
						relationTo: 'pages',
						required: true,
						admin: {
							condition: (data) => data.settings?.type === 'internal'
						}
					},
					{
						type: 'text',
						name: 'targetUrl',
						required: true,
						admin: {
							condition: (data) => data.settings?.type === 'url'
						}
					}
				]
			}	
		]
	},
	opts
)
