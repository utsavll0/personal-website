<script>
	import SparklingHighlight from '$lib/components/molecules/SparklingHighlight.svelte';
	import Socials from '$lib/components/molecules/Socials.svelte';
	import Image from '../atoms/Image.svelte';
</script>

<section id="about">
	<div class="info">
		<h2>
			Curious, Adaptable, and
			<SparklingHighlight color="secondary">Innovative</SparklingHighlight>
		</h2>
		<p>
			I'm Utsav, a passionate software engineer with a knack for turning ideas into reality. With a
			strong foundation in both front-end and back-end technologies, I thrive on creating seamless,
			scalable, and efficient solutions. My journey in tech has taught me the value of adaptability
			and continuous learning, allowing me to stay ahead in this ever-evolving field.
		</p>
		<div class="socials">
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
			margin: 5px;
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
