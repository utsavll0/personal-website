<script lang="ts">
	import type { Feature } from '$lib/utils/types';
	import FeatureCard from '$lib/components/molecules/FeatureCard.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';

	export let features: Feature[];

	function shuffleArray(array: Feature[]) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	// Shuffle the features array
	features = shuffleArray([...features]);
</script>

<ContentSection
	id="features"
	title="Projects"
	description="I like to dabble into many things including but not limited to"
>
	<div class="features-container">
		<div class="three-group-grid">
			{#each features as feature}
				<FeatureCard
					name={feature.name}
					description={feature.description}
					image={feature.image}
					tags={feature.tags}
					url={feature.url}
				/>
			{/each}
		</div>
	</div>
</ContentSection>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.features-container {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 20px;
	}

	.three-group-grid {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(3, 1fr); // 3 equal columns
		grid-gap: 20px;

		@media (max-width: 1085px) {
			grid-template-columns: repeat(2, 1fr); // 2 columns for medium screens
		}

		@include for-phone-only {
			grid-template-columns: 1fr; // 1 column for small screens
		}
	}
</style>
