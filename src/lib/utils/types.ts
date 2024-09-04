export type NoUndefinedField<T> = { [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>> };

export type SparkleType = {
	id: string;
	createdAt: number;
	color: string;
	size: number;
	style: any;
};

export type TagType = {
	label: string;
	color?: 'primary' | 'secondary';
};

export type SocialLink = {};

const projectTypes = ['Full Stack', 'Games', 'Work', 'ML/AI', 'Others'] as const;

export type ProjectType = (typeof projectTypes)[number];

export type Feature = {
	name: string;
	description: string;
	image: string;
	tags: TagType[];
	url: string;
	type: ProjectType[];
};

export type BlogPost = {
	tags: string[];
	keywords: string[];
	hidden: boolean;
	slug: string;
	title: string;
	date: string;
	updated: string;
	excerpt: string;
	html: string | undefined;
	readingTime: string;
	relatedPosts: BlogPost[];
	coverImage: string | undefined;
};

export type WorkEx = {
	company: string;
	designation: string;
	startDate: Date;
	endDate: Date;
	description: string;
	tags: TagType[];
	current: boolean;
};

export type ProjectStatus = 'Completed' | 'In Progress' | 'Limbo';

export type Projects = {
	name: string;
	start: Date;
	end: Date | null;
	status: ProjectStatus;
	description: string;
	images: string[] | null;
};
