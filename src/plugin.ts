import type { Config, Plugin } from 'payload/config';
import { SimpleWebsitePluginOptions } from './types';
import { Media, Pages } from './collections';
import { Navigations } from './collections';
import { RoutingSettings } from './globals';

export const simpleWebsitePlugin = (options: SimpleWebsitePluginOptions): Plugin => (
	config: Config
) => {
	config.collections?.push(
		Pages(config, options),
		Media(config, options),
		Navigations(config, options)
	);
	config.globals?.push(
		RoutingSettings(config, options)
	);
	return config
}
