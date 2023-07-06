import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	base: process.env.GITHUB_REPOSITORY?.split('/')[1] ?? './' // for GitHub Pages
});
