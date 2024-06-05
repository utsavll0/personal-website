<script lang="ts">
	import '$lib/scss/global.scss';
	import type { Hst } from '@histoire/plugin-svelte';
	import WorkExperience from './WorkExperience.svelte';
	import type { WorkEx } from '$lib/utils/types';

	export let Hst: Hst;

	const workEx = [
		{
			company: 'Makkajai',
			designation: 'Software Development Engineer - 1',
			description: 'I was software engineer here',
			startDate: 2021,
			endDate: 2023,
			tags: [{ label: 'Unity 2D' }]
		}
	] as unknown as WorkEx[];
</script>

<Hst.Story title="Organisms/WorkExperience" layout={{ type: 'single', iframe: true }}>
	<WorkExperience workExperiences={workEx} />
</Hst.Story>
