import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

// @ts-ignore
import { simpleWebsitePlugin } from '../../src/index';

import Users from './collections/Users'
import { Block } from 'payload/types'

export default buildConfig({
	admin: {
		user: Users.slug,
		bundler: webpackBundler(),
	},
	editor: slateEditor({}),
	collections: [Users],
	typescript: {
		outputFile: path.resolve(__dirname, 'payload-types.ts'),
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
	},
	plugins: [
		payloadCloud(),
		simpleWebsitePlugin({
			collections: {
				pages: {
					blocks: ([] as Block[])
				}
			}
		})
	],
	db: mongooseAdapter({
		url: process.env.DATABASE_URI,
	}),
})
