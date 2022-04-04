export interface Slice {
	type: string;
	position?: number;
	params?: Params
}

export type Params = Record<string, any>