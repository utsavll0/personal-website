import type { WorkEx } from '$lib/utils/types';

export default [
	{
		company: 'Makkajai, Remote, India',
		designation: 'Software Development Engineer - 1',
		description:
			'My role was of a general software engineer. I worked on total of 8 mobile games built using Unity and Cocos2D-X. Apart from this, I also had the responsibility of handling the backend and data analytics servers of the applications. As I gained experience, I was also charged with pitching new changes or bug fixes within the ideas and leading them as a sole developer.',
		startDate: new Date('2021-04-26'),
		endDate: new Date('2023-07-31'),
		tags: [
			{ label: 'Cocos2D-X', color: 'primary' },
			{ label: 'Unity2D', color: 'secondary' },
			{ label: 'Spring Boot', color: 'primary' },
			{ label: 'AWS Elastic Beanstalk', color: 'secondary' },
			{ label: 'Redshift', color: 'primary' },
			{ label: 'React', color: 'secondary' },
			{ label: 'Flutter', color: 'primary' },
			{ label: 'Flutter', color: 'secondary' }
		]
	},
	{
		company: 'Brainscale, Pune (Remote), India',
		designation: 'Junior Cloud Engineer',
		description:
			'I was a cloud engineer specializing in Microsoft Azure. I led the development of a test automation framework for a multi-million dollar project using Python Behave. Apart from this I also worked on internal projects such as adding new billing visualizations and building a teams chat bot. I also built an internal portal for project managers to track and analyze employee work hours.',
		startDate: new Date('2019-11-08'),
		endDate: new Date('2021-04-24'),
		tags: [
			{ label: 'ASP.NET', color: 'primary' },
			{ label: 'Python Behave', color: 'secondary' },
			{ label: 'Selenium', color: 'primary' },
			{ label: 'Azure', color: 'secondary' },
			{ label: 'Mirosoft Bot Framework', color: 'primary' },
			{ label: 'Angular', color: 'secondary' }
		]
	}
] as WorkEx[];
