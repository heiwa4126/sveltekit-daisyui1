// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

// for GitHub Pages
// see https://kit.svelte.dev/docs/configuration#paths
let basepath = process.env.GITHUB_REPOSITORY?.split('/')[1];
basepath = basepath ? '/' + basepath : '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		// adapter: adapter(),
		adapter: adapter({
			// https://kit.svelte.jp/docs/adapter-static
			// default options are shown. On some platforms
			// these options are set automatically — see below
			// pages: 'build',
			// assets: 'build',
			// fallback: undefined,
			// precompress: false, // trueにすると.gzと.brが出来る
			// strict: true
		}),
		paths: {
			base: basepath
		},

		alias: {
			$components: 'src/components'
		}
	}
};

export default config;
