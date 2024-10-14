import { GlobalConfig } from "payload/dist/exports/types";

export const settingsGlobal = (config: GlobalConfig): GlobalConfig => ({
	...config,
	admin: {
		...config.admin,
		group: 'settings'
	}
})