<script>
	import GitHubIcon from '$lib/icons/socials/github.svelte';
	import LinkedInIcon from '$lib/icons/socials/linkedin.svelte';
	import EmailIcon from '$lib/icons/socials/email.svelte';
	import Medium from '$lib/icons/socials/medium.svelte';
	import Prev from '$lib/icons/page-next.svelte';

	const recipient = 'utsavll0@gmail.com';
	const subject = 'Hello Utsav';
	const body = 'Hi Utsav,';
	const mailToUrl = `mailto:${recipient}?subject=${encodeURIComponent(
		subject
	)}&body=${encodeURIComponent(body)}`;
</script>

<div class="socials">
	<a
		href="https://github.com/utsavll0"
		target="noopener"
		rel="noopener noreferrer"
		title="See my GitHub profile"
	>
		<GitHubIcon />
	</a>
	<a
		href="https://linkedin.com/in/utsavkumar-lal"
		target="noopener"
		rel="noopener noreferrer"
		title="Connect on LinkedIn"
	>
		<LinkedInIcon />
	</a>
	<a href={mailToUrl} target="noopener" rel="noopener noreferrer" title="Send an email">
		<EmailIcon />
	</a>
	<a
		href="https://medium.com/@utsavkumarlal"
		target="noopener"
		rel="noopener noreferrer"
		title="View my medium!!"
	>
		<Medium />
	</a>

	<a href="https://medium.com/@utsavkumarlal">
		<Prev />
	</a>
</div>

<style lang="scss">
	@import '../../scss/breakpoints.scss';
	.socials {
		display: flex;
		align-items: center;
		gap: 20px;

		a {
			transition: all 0.2s ease-in-out;
			width: 24px;
			color: var(--color--text);
			fill: var(--color--text);

			&:hover {
				color: var(--color--primary);
				fill: var(--color--primary);
				filter: drop-shadow(0px 0px 3px var(--color--primary));
			}
		}
	}
</style>
