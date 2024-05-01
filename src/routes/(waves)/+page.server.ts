import features from '$lib/data/features';
import workex from '$lib/data/workex';
import { filteredPosts } from '$lib/data/blog-posts';

export async function load() {
	const posts = filteredPosts.slice(0, 4);

	return {
		features,
		posts,
		workex
	};
}
