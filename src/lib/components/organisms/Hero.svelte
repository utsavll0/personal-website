<script>
	import GitHubIcon from '$lib/icons/socials/github.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Sparkles from '../atoms/Sparkles.svelte';
	import Download from '$lib/icons/download.svelte';
	import Mail from '$lib/icons/mail.svelte';

	const recipient = 'utsavll0@gmail.com';
	const subject = 'Hello Utsav';
	const body = 'Hi Utsav,';
	const mailToUrl = `mailto:${recipient}?subject=${encodeURIComponent(
		subject
	)}&body=${encodeURIComponent(body)}`;
</script>

<section id="hero">
	<h1 class="hello">Hello, I am Utsav</h1>
	<p class="intro">
		<span class="left">A seasoned engineer who</span>
		<span class="right">can turn ideas into code</span>
	</p>
	<div class="ctas">
		<Sparkles>
			<Button
				color="secondary"
				href="https://docs.google.com/document/d/1R4ix8Pft5z1UzyQ5ZfS2AQOrAoec7YLjoNWMbvMsMNc/edit?usp=sharing"
			>
				<Download slot="icon" />
				Resume
			</Button>
		</Sparkles>
		<Button color="primary" href={mailToUrl}>
			<Mail slot="icon" />
			Contact me
		</Button>
	</div>
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	#hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 15px;
		position: relative;
		padding: 80px 0;

		@include for-phone-only {
			padding: 40px 0 50px;
		}

		.hello {
			text-align: center;
		}

		.intro {
			font-weight: 500;
			font-size: 1.4rem;
			width: min(100%, 600px);
			display: flex;
			flex-direction: column;

			.left {
				text-align: left;
			}
			.right {
				text-align: right;
			}

			@include for-phone-only {
				display: none;
			}
		}

		.ctas {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			gap: 10px;
			width: 100%;
		}
	}
</style>
