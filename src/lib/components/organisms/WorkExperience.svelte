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

<ContentSection id="experience" title="Experience" description="My work experience">
	<ul class="workex">
		{#each workExperiences as workEx}
			<li class="list-item">
				<div class="small">
					{formatter.format(workEx.startDate)} - {formatter.format(workEx.endDate)}
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
	.workex {
		width: 100%;
	}

	.list-item {
		display: flex;
		flex-direction: row;
		flex-grow: inherit;
		justify-content: space-around;
		margin-bottom: 3%;
	}

	.small {
		flex: 2;
		text-align: center;
		font-size: 1.2rem;
		font-family: var(--font--title);
		font-weight: 600;
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

		.header {
			font-size: 1.2rem;
			font-family: var(--font--title);
			font-weight: 600;
		}

		.subheader {
			font-size: 1rem;
			font-family: var(--font--title);
			font-weight: 500;
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
