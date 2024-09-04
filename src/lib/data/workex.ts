import type { WorkEx } from '$lib/utils/types';

export default [
	{
		company: 'XLOC, Raleigh, NC',
		designation: 'Programming Intern',
		description:
			'As a programming intern, I am helping build the next version of XLOC which is a CMS application used by studios like Bethesda and Activision. I am also utilizing my skills in AWS cloud to streamline deployment methods and improving existing infrastructure.',
		startDate: new Date('2024-06-24'),
		tags: [
			{ label: 'AWS', color: 'primary' },
			{ label: 'CloudFormation', color: 'secondary' },
			{ label: 'ASP.NET', color: 'primary' },
			{ label: 'VB', color: 'secondary' },
			{ label: 'SQL Server', color: 'primary' },
			{ label: 'CodeDeploy', color: 'secondary' },
			{ label: 'EC2', color: 'secondary' },
			{ label: 'S3', color: 'secondary' },
			{ label: 'Elastic LoadBalancers', color: 'secondary' }
		],
		current: true
	},
	{
		company: 'NC State Nuclear Engineering Department, Raleigh, NC',
		designation: 'Graduate Student Researcher',
		description:
			'As a software developer on the OpenPRA app, I developed the admin and user profile pages, and implemented features for creating and managing new users and invites to the application. I also began integrating role-based access control into both the frontend and backend services.',
		startDate: new Date('2023-12-07'),
		endDate: new Date('2024-05-31'),
		tags: [
			{ label: 'React', color: 'primary' },
			{ label: 'Elastic UI', color: 'secondary' },
			{ label: 'NestJS', color: 'primary' },
			{ label: 'Node', color: 'secondary' },
			{ label: 'MongoDB', color: 'primary' }
		],
		current: false
	},
	{
		company: 'Makkajai, Remote, India',
		designation: 'Software Development Engineer - 1',
		description:
			'At Makkajai, I worked as a general software engineer. As part of a small team, I was responsible for managing 8 mobile apps for iOS and Android. My daily tasks included ensuring our games were bug-free and maintaining the stability of our backend services. I also led several infrastructure improvement projects, such as deploying a new analytics server and upgrading deprecated services to the latest versions. As my responsibilities expanded, I occasionally managed and led projects to completion.',
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
			'At Brainscale, as a full stack cloud developer specializing in Microsoft Azure, I worked on various projects, with my proudest achievement being the development of a test automation framework for a multi-million dollar project using Python Behave. Additionally, I built a chatbot for querying Azure Billing Costs on Microsoft Teams and created an internal portal to analyze employee workload analytics using Power BI. During my time at Brainscale, I also became 2x Azure cloud certified and developed additional skills in customer service and customer support.',
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
			'My initial company where I gained foundational skills in software engineering. I completed training in Java, HTML, CSS, JavaScript, SQL, and more. Additionally, I became familiar with Agile development practices and participated in Scrum meetings.',
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
