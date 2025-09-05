<script lang="ts">
	import type { WorkEx } from '$lib/utils/types';
	import ContentSection from './ContentSection.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	export let workExperiences: WorkEx[];

	export let color: 'primary' | 'secondary' = 'primary';

	const formatter = new Intl.DateTimeFormat('en-US', {
		month: 'short',
		year: 'numeric'
	});
</script>

<ContentSection
	id="experience"
	title="Work Experience"
	description="Building real-world products has shaped my ability to engineer for scale, reliability, and code quality, while driving features from concept to delivery in fast-paced environments."
>
	<ul class="workex">
		{#each workExperiences as workEx}
			<li class="list-item">
				<div class="small">
					{formatter.format(workEx.startDate)} - {workEx.current
						? 'Current'
						: formatter.format(workEx.endDate)}
				</div>
				<div class="description {color}">
					<div class="header">
						<span>{workEx.designation}</span>
					</div>
					<div class="subheader">
						<span>{workEx.company}</span>
					</div>
					<div class="main-text">
						<span>{workEx.description}</span>
					</div>
					<div class="tags" />
					<div class="footer">
						{#if workEx.tags && workEx.tags.length > 0}
							<div class="tags">
								{#each workEx.tags as tag}
									<Tag color={tag.color}>{tag.label}</Tag>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			</li>
		{/each}
	</ul>
</ContentSection>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.workex {
		margin: 0;
	}

	.list-item {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		margin-bottom: 3%;

		@include for-phone-only {
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
		}
	}

	.small {
		flex: 2;
		text-align: center;
		font-size: 1.2rem;
		font-family: var(--font--title);
		font-weight: 600;
		align-content: center;

		@include for-phone-only {
			flex: 1;
			padding-bottom: 10px;
			font-size: 1rem;
			padding: 1%;
		}
	}

	.description {
		flex: 3;
		text-align: start;
		background: var(--color--card-background);
		box-shadow: var(--card-shadow);
		color: var(--color--text);
		border-radius: 10px;
		transition: all 0.4s ease;
		position: relative;
		overflow: hidden;
		padding: 2%;
		margin-right: 2%;

		@include for-phone-only {
			flex: 1;
			padding-bottom: 10px;
			padding: 5%;
		}

		.header {
			font-size: 1.2rem;
			font-family: var(--font--title);
			font-weight: 600;
			@include for-phone-only {
				font-size: 1rem;
			}
		}

		.subheader {
			font-size: 1rem;
			font-family: var(--font--title);
			font-weight: 500;
			@include for-phone-only {
				font-size: 0.8rem;
			}
		}

		.main-text {
			padding-top: 1.5%;
			font-size: 0.9rem;
			font-family: var(--font--default);
		}
	}

	.footer {
		margin-top: 20px;
	}

	.tags {
		display: flex;
		align-items: center;
		gap: 5px;
		flex-wrap: wrap;
	}
</style>
