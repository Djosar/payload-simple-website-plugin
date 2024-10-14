import { GlobalConfig } from "payload/dist/exports/types";
import { settingsGlobal } from "./settings";
import { GlobalFactory, SimpleWebsitePluginOptions } from "../../types";
import { Config } from "payload/config";

export const RoutingSettings: GlobalFactory = (config: Config, opts?: SimpleWebsitePluginOptions) => settingsGlobal({
	slug: 'routing',
	access: opts?.globals.routingSettings.access ?? {},
	fields: [
		{
			name: 'home',
			type: 'relationship',
			relationTo: 'pages',
			required: true
		},
		{
			name: 'notFound',
			type: 'relationship',
			relationTo: 'pages'
		}
	]
})