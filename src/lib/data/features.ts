import type { Feature } from '$lib/utils/types';

export default [
	{
		name: 'Animal Movement Tracking App',
		description:
			'This app built using Spring Boot and NextJS helps track animal movement across America. The animal data is stored in a PostgresSQL server. The app can be one clicked deployed using docker compose and runs perfectly out of the box.',
		image: 'images/animal_farm.png',
		tags: [{ label: 'Java' }, { label: 'Typescript', color: 'secondary' }, { label: 'Docker' }],
		url: 'https://github.com/utsavll0/movement-app',
		type: ['Full Stack']
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
		url: 'https://github.com/utsavll0/calorieApp_server',
		type: ['Full Stack']
	},
	{
		name: 'Redshift Import Plugin - Posthog',
		description:
			'Contributed to Posthog analytics app by helping build the Redshift import plugin - A plugin to transfer existing analytics data from redshift to posthog',
		image: 'images/osc.png',
		tags: [{ label: 'Typescript' }],
		url: 'https://github.com/PostHog/posthog-redshift-import-plugin',
		type: 'Others'
	},
	{
		name: 'Spendwise',
		description:
			'Extended an already existing telegram bot to add speech to text features in the app. Added features to export and import data to a csv file.',
		image: 'images/banner.jpg',
		url: 'https://github.com/utsavll0/spendwise',
		tags: [
			{ label: 'Python' },
			{ label: 'Telegram Bot', color: 'secondary' },
			{ label: 'Speech to Text' }
		],
		type: ['Full Stack']
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
		],
		type: ['Games', 'ML/AI']
	},
	{
		name: 'Predicting NBA match outcome',
		description:
			'A data engineering and data science project to explore joining two different datasets of varying origin. Further on the project explores training Naive Bayes and Nueral Network models to predict outcome of matches',
		image: 'images/basketball.png',
		url: 'https://github.com/utsavll0/NBA-match-predictor/',
		tags: [
			{ label: 'Python' },
			{ label: 'Pandas', color: 'secondary' },
			{ label: 'Sklearn', color: 'primary' }
		],
		type: ['ML/AI']
	},
	{
		name: 'Shade Engine',
		description:
			'A full fledged game engine built using SDL2 and C++. It features a fully functional physics engine full with collisions, gravity and friction. It is based on entity component system archtiecture, fully multi threaded and has a built in support for networking.',
		image: 'images/shade.jpeg',
		url: 'https://github.com/jayeshCodes/Shade-GameEngine',
		tags: [
			{ label: 'SDL2', color: 'primary' },
			{ label: 'C++', color: 'secondary' }
		],
		type: ['Games']
	},
	{
		name: 'Course Manager',
		description:
			'A full fledged React app to manage courses. The app is built using React and Flask. The main motivation was to build our own ORM and use it to manage the database.',
		image: 'images/course.jpeg',
		url: 'https://github.com/SwarajKaondal/Course-Manager',
		tags: [
			{ label: 'Python', color: 'primary' },
			{ label: 'React', color: 'secondary' },
			{ label: 'SQL', color: 'primary' }
		],
		type: ['Full Stack']
	}
] as Feature[];
