import { ReactNode } from "react";


export const enum DirectionEnum {
	'row',
	'column'
}

export const enum JustifyContentEnum {
	'start',
	'end',
	'center'
}

export const enum AlignItemsEnum {
	'start',
	'end',
	'center'
}

export const enum GapEnum {
	'sm',
	'md',
	'lg',
	'xl'
}

export type FlexContainerPropsTypes = {
	children: ReactNode;
	direction?: DirectionEnum;
	justifyContent?: JustifyContentEnum;
	alignItems?: AlignItemsEnum;
	gap?: GapEnum;
}