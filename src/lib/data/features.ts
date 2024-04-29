import type { Feature } from '$lib/utils/types';

export default [
	{
		name: 'Animal Movement Tracking App',
		description:
			'This app built using Spring Boot and NextJS helps track animal movement across America. The animal data is stored in a PostgresSQL server. The app can be one clicked deployed using docker compose and runs perfectly out of the box.',
		image: 'images/animal_farm.png',
		tags: [{ label: 'Java' }, { label: 'Typescript', color: 'secondary' }, { label: 'Docker' }],
		url: 'https://github.com/utsavll0/movement-app'
	},
	{
		name: 'Burnout',
		description:
			'Extended the Burnout App, which helps user track calories. Added new graphs using ChartJS for tracking daily calories. Improved existing chat bot. Designed a CI/CD pipeline using Github Actions.',
		image: 'images/burnout.png',
		tags: [
			{ label: 'Python' },
			{ label: 'HTML', color: 'secondary' },
			{ label: 'CSS', color: 'primary' },
			{ label: 'JS', color: 'secondary' }
		],
		url: 'https://github.com/utsavll0/calorieApp_server'
	},
	{
		name: 'Redshift Import Plugin - Posthog',
		description:
			'Contributed to Posthog analytics app by helping build the Redshift import plugin - A plugin to transfer existing analytics data from redshift to posthog',
		image: 'images/osc.png',
		tags: [{ label: 'Typescript' }],
		url: 'https://github.com/PostHog/posthog-redshift-import-plugin'
	},
	{
		name: 'Spendwise',
		description:
			'Extended an already existing telegram bot to add speech to text features in the app. Added features to export and import data to a csv file.',
		image: 'images/banner.jpg',
		url: 'https://github.com/utsavll0/spendwise',
		tags: [{ label: 'Powered by Image Transmutation' }]
	},
	{
		name: 'Reinforcement Learning Car',
		description:
			'A project where I explored reinforcement learning using Unity and MLAgents as platform. This was part of my coursework and involved fine tuning a proximal policy optimization model and train a car agent to drive around a track.',
		image: 'images/car.png',
		url: 'https://github.com/utsavll0/Reinforcement-Learning-Car',
		tags: [
			{ label: 'C#' },
			{ label: 'Unity 3D', color: 'secondary' },
			{ label: 'Python', color: 'primary' },
			{ label: 'PyTorch', color: 'secondary' }
		]
	},
	{
		name: 'Predicting NBA match outcome',
		description:
			'A data engineering and data science project to explore joininng two different datasets of varying origin. Further on the project explores training Naive Bayes and Nueral Network models to predict outcome of matches',
		image: 'images/basketball.png',
		url: 'https://github.com/utsavll0/NBA-match-predictor/',
		tags: [
			{ label: 'Python' },
			{ label: 'Pandas', color: 'secondary' },
			{ label: 'Sklearn', color: 'primary' }
		]
	}
] as Feature[];
