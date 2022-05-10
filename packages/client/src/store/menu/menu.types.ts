export interface IMenuLink {
	id: string,
	slug: string,
	title: string,
}

export interface IMenuGroup {
	title: string,
	slug: string,
	items: IMenuLink[]
}

export type MenuState = {
	menuGroups: IMenuGroup[]
}