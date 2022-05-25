// Generated by https://quicktype.io

export interface Cookie {
	name: string;
	expires: string;
	desc: string;
	obj: number;
	script: Script;
	category: Category[];
}

export interface Category {
	term_id: number;
	name: string;
	slug: string;
	term_group: number;
	term_taxonomy_id: number;
	taxonomy: string;
	description: string;
	parent: number;
	count: number;
	filter: string;
	term_order: string;
}

export interface Script {
	head: string;
	body: string;
}
