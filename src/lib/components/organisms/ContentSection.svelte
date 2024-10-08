<script lang="ts">
	import SparklingHighlight from '../molecules/SparklingHighlight.svelte';

	export let id: string | undefined = undefined;
	export let title: string | undefined = undefined;
	export let description: string | undefined = undefined;

	export let align: 'left' | 'top' | 'right' = 'top';
</script>

<section {id} class="content-section {align}">
	<div class="title-area">
		{#if title || description}
			<div class="text">
				{#if title}
					<h2>
						<SparklingHighlight color="secondary">{title}</SparklingHighlight>
					</h2>
				{/if}
				{#if description}
					<p class="description">
						{description}
					</p>
				{/if}
			</div>
		{/if}
		{#if $$slots['button']}
			<div class="button">
				<slot name="button" />
			</div>
		{/if}
	</div>
	<div class="content-area">
		<slot />
	</div>
</section>

<style lang="scss">
	@import '../../scss/breakpoints.scss';

	.content-section {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 10px;
		padding: 50px 0;

		.title-area {
			flex: 2;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			gap: 15px;

			.text {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				gap: 5px;
			}
		}

		.description {
			padding-bottom: 10px;
		}

		.content-area {
			flex: 5;

			display: grid;
			place-items: center;
			width: 100%;
		}

		@include for-tablet-landscape-up {
			&.left {
				.title-area {
					order: 1;
				}
				.content-area {
					order: 2;
				}
			}
			&.right {
				.title-area {
					order: 2;
				}
				.content-area {
					order: 1;
				}
			}
			&.top {
				flex-direction: column;
				.title-area {
					order: 1;
					max-width: 600px;
				}
				.content-area {
					order: 2;
					width: 100%;
				}
			}
		}
		@include for-tablet-portrait-down {
			flex-direction: column;
		}
	}
</style>
