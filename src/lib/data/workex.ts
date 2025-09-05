import type { WorkEx } from '$lib/utils/types';

export default [
	{
		company: 'OpenPRA Org @ NC State University, Raleigh, NC',
		designation: 'Research Software Engineer',
		description:
			'At OpenPRA, I work as a Research Software Engineer on a team developing an open-source platform for probabilistic risk assessment (PRA) of nuclear reactors. My primary focus is designing and building intuitive, scalable front-end user interfaces and seamlessly integrating them with back-end services to ensure performance and reliability. In addition to core development, I contribute to the team’s growth by mentoring junior engineers, leading onboarding efforts, and running training sessions to accelerate knowledge transfer and collaboration',
		startDate: new Date('2023-12-07'),
		endDate: new Date('2024-05-31'),
		tags: [
			{ label: 'Software Development', color: 'primary' },
			{ label: 'System Design', color: 'secondary' },
			{ label: 'Scalable Architecture', color: 'primary' },
			{ label: 'Python', color: 'secondary' },
			{ label: 'Java', color: 'primary' },
			{ label: 'Node.JS', color: 'secondary' },
			{ label: 'React', color: 'primary' },
			{ label: 'TypeScript', color: 'secondary' }
		],
		current: true
	},
	{
		company: 'XLOC (Keywords Studios), Remote, USA',
		designation: 'Software Engineer Intern',
		description:
			'At XLOC, I worked as a Software Engineer Intern on the team responsible for developing and maintaining the company’s SaaS application. My primary focus was on enhancing and optimizing the core platform while also building new features to streamline workflows and improve efficiency. Beyond development, I actively contributed to code reviews and collaborated closely with teammates to ensure adherence to high-quality coding standards and best practices',
		startDate: new Date('2024-06-24'),
		endDate: new Date('2025-05-03'),
		tags: [
			{ label: 'Cloud Computing', color: 'primary' },
			{ label: 'Web Application Development', color: 'secondary' },
			{ label: 'Backend Development', color: 'primary' },
			{ label: 'Python', color: 'secondary' },
			{ label: 'Java', color: 'primary' },
			{ label: 'C#', color: 'secondary' },
			{ label: 'React', color: 'primary' },
			{ label: 'TypeScript', color: 'secondary' },
			{ label: 'AWS', color: 'primary' }
		],
		current: false
	},
	{
		company: 'Makkajai, Remote, India',
		designation: 'Software Development Engineer',
		description:
			'At Makkajai, a fast-growing edtech startup, I worked as a Software Engineer with broad ownership across a suite of 8 high-scale mobile apps on iOS and Android. In a fast-paced environment with rapid release cycles, I ensured our games remained stable, reliable, and engaging for millions of active users, while also maintaining the performance of critical backend services. I led several infrastructure improvement initiatives that strengthened system reliability and supported the company’s growth. As my role expanded, I frequently took full ownership of projects—from planning through execution—driving them to successful completion and directly contributing to the team’s velocity and impact',
		startDate: new Date('2021-04-26'),
		endDate: new Date('2023-07-31'),
		tags: [
			{ label: 'Full Stack Development', color: 'primary' },
			{ label: 'Mobile Application Development', color: 'secondary' },
			{ label: 'Infrastructure Improvements', color: 'primary' },
			{ label: 'Python', color: 'secondary' },
			{ label: 'Java', color: 'primary' },
			{ label: 'C#', color: 'secondary' },
			{ label: 'Flutter', color: 'primary' },
			{ label: 'TypeScript', color: 'secondary' },
			{ label: 'AWS', color: 'primary' }
		],
		current: false
	},
	{
		company: 'Brainscale, Pune (Remote), India',
		designation: 'Junior Cloud Engineer',
		description:
			'At Brainscale, I worked as a Full Stack Cloud Developer specializing in Microsoft Azure, contributing to multiple high-impact projects. My proudest achievement was designing and implementing a test automation framework that streamlined quality assurance for a multi-million-dollar engagement, significantly improving efficiency and reliability. I also developed a chatbot to provide real-time visibility into billing costs, and created an internal portal to track and analyze employee workload analytics, enhancing team productivity and resource planning. During this time, I earned two cloud certifications and strengthened my skills in both technical delivery and customer-facing support, enabling me to contribute across engineering and client engagements',
		startDate: new Date('2019-11-08'),
		endDate: new Date('2021-04-24'),
		tags: [
			{ label: 'Cloud Development', color: 'primary' },
			{ label: 'Automation Frameworks', color: 'secondary' },
			{ label: 'Data Analytics', color: 'primary' },
			{ label: 'Python', color: 'secondary' },
			{ label: 'C#', color: 'secondary' },
			{ label: 'ASP.NET', color: 'primary' },
			{ label: 'Azure', color: 'secondary' },
			{ label: 'SQL', color: 'primary' }
		],
		current: false
	}
] as WorkEx[];
