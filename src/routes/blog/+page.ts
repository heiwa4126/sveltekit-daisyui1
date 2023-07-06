import { posts } from './data';

export interface Summary {
	slug: string;
	title: string;
}

export function load() {
	return {
		summaries: posts.map(
			(post): Summary => ({
				slug: post.slug,
				title: post.title
			})
		)
	};
}
