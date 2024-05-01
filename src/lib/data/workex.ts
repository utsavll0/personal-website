import type { WorkEx } from '$lib/utils/types';

export default [
	{
		company: 'NC State Nuclear Engineering Department',
		designation: 'Graduate Student Researcher',
		description:
			'Working as a software developer under Dr Mihai, I helped him develop the admin and user profile pages for the OpenPRA app. The app helps design probabilistic designs like Bayesian Networks, Fault Tree Diagrams and many more.',
		startDate: new Date('2023-12-07'),
		endDate: new Date('2024-05-31'),
		tags: [
			{ label: 'React', color: 'primary' },
			{ label: 'Elastic UI', color: 'secondary' },
			{ label: 'NestJS', color: 'primary' },
			{ label: 'Node', color: 'secondary' },
			{ label: 'MongoDB', color: 'primary' }
		],
		current: true
	},
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
		],
		current: false
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
		],
		current: false
	},
	{
		company: 'Tech Mahindra Ltd, Pune, India',
		designation: 'Associate Software Engineer',
		description:
			'My first company where I learnt the ropes of software engineer. I completed trainings on Java, HTML, CSS, JS, SQL among other things. I also learned the ways of Agile development and Scrum meetings.',
		startDate: new Date('2019-07-31'),
		endDate: new Date('2019-11-07'),
		tags: [
			{ label: 'Java', color: 'primary' },
			{ label: 'Oracle SQL', color: 'secondary' },
			{ label: 'Spring', color: 'primary' },
			{ label: 'HTML', color: 'secondary' },
			{ label: 'CSS', color: 'primary' },
			{ label: 'Javascript', color: 'secondary' },
			{ label: 'Agile', color: 'primary' },
			{ label: 'Scrum', color: 'secondary' }
		],
		current: false
	}
] as WorkEx[];
