<script lang="ts">
	import type { Feature } from '$lib/utils/types';
	import FeatureCard from '$lib/components/molecules/FeatureCard.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import Button from '../atoms/Button.svelte';

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

	let currentPage = 1;
	const itemsPerPage = 6;
	const totalPages = Math.ceil(features.length / itemsPerPage);

	// Computed paginated items
	$: paginatedFeatures = features.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	function nextPage() {
		if (currentPage < totalPages) currentPage++;
	}

	function prevPage() {
		if (currentPage > 1) currentPage--;
	}
</script>

<ContentSection
	id="features"
	title="Projects"
	description="A small showcase for my technical skills!"
>
	<div class="features-container">
		<div class="pagination">
			<Button on:click={prevPage} disabled={currentPage === 1}>Previous</Button>
			<span>Page {currentPage} of {totalPages}</span>
			<Button on:click={nextPage} disabled={currentPage === totalPages}>Next</Button>
		</div>
		<div class="three-group-grid">
			{#each paginatedFeatures as feature}
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
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 20px;

		@media (max-width: 1085px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@include for-phone-only {
			grid-template-columns: 1fr;
		}
	}

	.pagination {
		margin-top: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;

		span {
			font-family: var(--font--default);
		}
	}
</style>
