import { Config } from "payload/config";
import { Block, CollectionConfig } from "payload/dist/exports/types";

export type SimpleWebsitePluginOptions = {
	collections: {
		pages: {
			blocks: Block[];
		};
		media?: {
			directory?: string;
			url?: string
		}
	};
};

export type CollectionFactory = (
	config: Config,
	opts?: SimpleWebsitePluginOptions
) => CollectionConfig;