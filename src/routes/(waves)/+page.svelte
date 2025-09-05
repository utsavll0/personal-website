<script lang="ts">
	import Hero from '$lib/components/organisms/Hero.svelte';
	import About from '$lib/components/organisms/About.svelte';
	import Features from '$lib/components/organisms/Features.svelte';
	import type { Feature, BlogPost, WorkEx } from '$lib/utils/types';
	import WorkExperience from '$lib/components/organisms/WorkExperience.svelte';

	export let data: {
		features: Feature[];
		posts: BlogPost[];
		workex: WorkEx[];
	};

	let { features, posts, workex } = data;
</script>

<div class="container">
	<Hero />
	<About />
	<WorkExperience workExperiences={workex} />
	<Features {features} />
</div>
