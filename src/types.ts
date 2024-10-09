import { Config } from "payload/config";
import { CollectionConfig } from "payload/dist/exports/types";

export type SimpleWebsitePluginOptions = {
	collections?: {
		media?: {
			directory?: string;
			url?: string
		}
	}
};

export type CollectionFactory = (
	config: Config,
	opts?: Partial<SimpleWebsitePluginOptions>
) => CollectionConfig;