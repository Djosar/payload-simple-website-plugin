import type { Config, Plugin } from 'payload/config';
import { SimpleWebsitePluginOptions } from './types';
import { Media, Pages } from './collections';

export const simpleWebsitePlugin = (options: SimpleWebsitePluginOptions): Plugin => (
	config: Config
) => {
	config.collections?.push(Pages(config), Media(config, options));
	return config
}
