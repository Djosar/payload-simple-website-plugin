import payload from 'payload';
import type { Config, Plugin } from 'payload/config';
import { collections } from './collections';

export const simpleWebsitePlugin = (): Plugin => (
	config: Config
) => {
	payload.logger.info('PLUGIN ACTIVATED');
	config.collections?.push(...collections);
	return config
}
