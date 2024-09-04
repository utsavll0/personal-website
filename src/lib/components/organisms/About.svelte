<script>
	import SparklingHighlight from '$lib/components/molecules/SparklingHighlight.svelte';
	import Socials from '$lib/components/molecules/Socials.svelte';
	import Image from '../atoms/Image.svelte';
</script>

<section id="about">
	<div class="info">
		<h2>
			Passionate, Hard Working and
			<SparklingHighlight color="secondary">Curious!</SparklingHighlight>
		</h2>
		<p>
			With a strong background and experience in software development, I'm seeking a new role that
			will consistently challenge me. Given my diverse experience, I'm interested in positions in
			full stack software engineering and game development. In addition to my enthusiasm for coding,
			I enjoy playing badminton in my spare time and watching various sports. I'm also fascinated by
			how things work and have a lot of random knowledge that I love to share with others.
		</p>
		<div class="socials">
			<span>Socials:</span>
			<Socials />
		</div>
	</div>
	<div class="image">
		<Image src="images/utsav-rounded.png" alt="Image Avatar" />
	</div>
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	#about {
		position: relative;
		display: grid;
		grid-template-columns: 500px 250px;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 50px;

		@include for-phone-only {
			grid-template-columns: 1fr;
			justify-items: center;
			gap: 20px;
		}

		.info {
			display: flex;
			flex-direction: column;
			gap: 10px;
			h2 {
				@include for-phone-only {
					text-align: center;
				}
			}

			p {
				@include for-phone-only {
					text-align: justify;
				}
			}

			@include for-phone-only {
				gap: 20px;
			}
		}

		.socials {
			display: flex;
			align-items: center;
			gap: 15px;

			@include for-phone-only {
				justify-content: center;
				margin-bottom: 10px;
				span {
					display: none;
				}
			}
		}

		.image {
			width: 400px;
			height: 400px;
			overflow: hidden;
			border-radius: 50%;
			border: 1.5px solid var(--color--secondary-tint);

			@include for-phone-only {
				width: 200px;
				height: 200px;
			}
		}
	}
</style>
