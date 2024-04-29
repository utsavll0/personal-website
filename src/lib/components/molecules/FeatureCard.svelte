<script lang="ts">
	import Card from '$lib/components/atoms/Card.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import type { TagType } from '$lib/utils/types';
	import Image from '../atoms/Image.svelte';
	import GitHubIcon from '$lib/icons/socials/github.svelte';

	export let name: string;
	export let description: string;
	export let image: string;
	export let tags: TagType[] | undefined;
	export let url: string | undefined;
</script>

<Card additionalClass="feature-card">
	<div class="image" slot="image">
		<Image src={image} alt="Picture describing the {name} feature" />
	</div>
	<div class="content" slot="content">
		<div class="heading">
			<div class="title">
				<span>{name}</span>
			</div>
			<div class="icons">
				<a href={url} target="noopener" rel="noopener noreferrer" title="Github project">
					<GitHubIcon />
				</a>
			</div>
		</div>
		<p>{description}</p>
	</div>
	<div class="footer" slot="footer">
		{#if tags && tags.length > 0}
			<div class="tags">
				{#each tags as tag}
					<Tag color={tag.color}>{tag.label}</Tag>
				{/each}
			</div>
		{/if}
	</div>
</Card>

<style lang="scss">
	@import '../../scss/breakpoints.scss';
	.content {
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: flex-start;
	}

	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		flex: 1;

		font-size: 1.2rem;
		font-family: var(--font--title);
		font-weight: 700;
	}

	.tags {
		display: flex;
		align-items: center;
		gap: 5px;
		flex-wrap: wrap;
	}

	.footer {
		margin-top: 20px;
	}

	:global(.feature-card .image img) {
		object-fit: cover;
	}

	.heading {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.icons {
		display: flex;
		align-items: center;
		gap: 20px;
		margin-left: 10px;

		a {
			transition: all 0.2s ease-in-out;
			width: 24px;
			color: var(--color--text);
			fill: var(--color--text);
			text-decoration: none;

			&:hover {
				color: var(--color--primary);
				fill: var(--color--primary);
				filter: drop-shadow(0px 0px 3px var(--color--primary));
			}
		}
	}
</style>
