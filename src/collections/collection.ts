import { CollectionConfig } from "payload/dist/exports/types";
import { SimpleWebsitePluginOptions } from "../types";

export const baseCollection = (
	key: keyof SimpleWebsitePluginOptions['collections'],
	config: CollectionConfig,
	opts?: SimpleWebsitePluginOptions
): CollectionConfig => ({
	...config,
	access: opts?.collections[key]?.access ?? {}
})