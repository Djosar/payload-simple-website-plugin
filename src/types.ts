import { Config } from "payload/config";
import { Block, CollectionConfig, GlobalConfig } from "payload/dist/exports/types";

type BaseOptions = {
	access?: CollectionConfig['access'];
};

export type SimpleWebsitePluginOptions = {
	collections: {
		pages: {
			blocks: Block[];
		} & BaseOptions;
		media?: {
			directory?: string;
			url?: string,
		} & BaseOptions;
	};
	globals: {
		routingSettings: BaseOptions
	}
};

export type CollectionFactory = (
	config: Config,
	opts?: SimpleWebsitePluginOptions
) => CollectionConfig;

export type GlobalFactory = (
	config: Config,
	opts?: SimpleWebsitePluginOptions
) => GlobalConfig;