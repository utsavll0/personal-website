<script lang="ts">
	import type { Feature, ProjectType } from '$lib/utils/types';
	import FeatureCard from '$lib/components/molecules/FeatureCard.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import Button from '../atoms/Button.svelte';
	import { writable } from 'svelte/store';
	import Next from '$lib/icons/page-next.svelte';
	import Prev from '$lib/icons/page-prev.svelte';

	export let features: Feature[];

	const itemsPerPage = 3;
	let currentPage = writable(1);
	let selectedFilter = writable<ProjectType | null>(null);

	$: filteredFeatures = features.filter((feature) => {
		if ($selectedFilter === null) return true;
		return feature.type.includes($selectedFilter);
	});

	$: paginatedFeatures = filteredFeatures.slice(
		($currentPage - 1) * itemsPerPage,
		$currentPage * itemsPerPage
	);

	$: totalPages = Math.ceil(filteredFeatures.length / itemsPerPage);

	function nextPage() {
		currentPage.update((n) => Math.min(n + 1, totalPages));
	}

	function prevPage() {
		currentPage.update((n) => Math.max(n - 1, 1));
	}

	function setFilter(filter: ProjectType | null) {
		selectedFilter.set(filter);
		currentPage.set(1);
	}
</script>

<ContentSection
	id="features"
	title="Projects"
	description="Filter projects by clicking on category"
>
	<div class="filters">
		<Button
			color={$selectedFilter === null ? 'secondary' : 'primary'}
			on:click={() => setFilter(null)}
		>
			All
		</Button>
		<Button
			color={$selectedFilter === 'Full Stack' ? 'secondary' : 'primary'}
			on:click={() => setFilter('Full Stack')}
		>
			Full Stack
		</Button>
		<Button
			color={$selectedFilter === 'Games' ? 'secondary' : 'primary'}
			on:click={() => setFilter('Games')}
		>
			Games
		</Button>
		<!-- <Button
			color={$selectedFilter === 'Work' ? 'secondary' : 'primary'}
			on:click={() => setFilter('Work')}
		>
			Work
		</Button> -->
		<Button
			color={$selectedFilter === 'ML/AI' ? 'secondary' : 'primary'}
			on:click={() => setFilter('ML/AI')}
		>
			ML/AI
		</Button>
		<Button
			color={$selectedFilter === 'Others' ? 'secondary' : 'primary'}
			on:click={() => setFilter('Others')}
		>
			Others
		</Button>
	</div>
	<div class="features-container">
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

	<div class="pagination-controls">
		<!-- Use the Prev SVG component for the previous button -->
		<button on:click={prevPage} disabled={$currentPage === 1} class="icon-button">
			<Prev />
		</button>

		<!-- Use the Next SVG component for the next button -->
		<button on:click={nextPage} disabled={$currentPage === totalPages} class="icon-button">
			<Next />
		</button>
	</div>
</ContentSection>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.filters {
		display: flex;
		flex-direction: row;
		align-items: center; /* This replaces the outdated -ms-flex-align */
		margin: 10px;
		gap: 15px; /* Adjust the value to your desired spacing */
	}

	.filters .button {
		&.selected {
			background-color: var(--color--primary);
			color: var(--color--white);
		}
	}

	.features-container {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 20px;
	}

	.pagination-controls {
		display: flex;
		justify-content: space-between;
		margin-top: 20px;
	}
	.icon-button {
		background: none;
		border: none;
		cursor: pointer;
		padding: 5px;
		color: var(--color--text);
		fill: var(--color--text);

		&:disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}

		&:not(:disabled):hover {
			color: var(--color--primary);
			fill: var(--color--primary);
			filter: drop-shadow(0px 0px 3px var(--color--primary));
		}
	}

	.three-group-grid {
		width: 100%;
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-gap: 20px;

		@media (max-width: 1085px) {
			grid-template-columns: 1fr 1fr;
		}

		@include for-phone-only {
			grid-template-columns: 1fr;
		}

		// Select every 3 elements, starting from position 2
		// And make it take up 2 rows
		@media (min-width: 1086px) {
			> :global(:nth-child(3n + 2)) {
				grid-row: span 2;
			}
		}

		// Select every 3 elements, starting from position 1
		// And make it take up 2 columns
		> :global(:nth-child(3n + 1)) {
			@media (max-width: 1085px) {
				grid-column: span 2;
			}

			@include for-tablet-portrait-down {
				grid-template-columns: 1fr;
				grid-column: unset;
			}
		}
	}
</style>
