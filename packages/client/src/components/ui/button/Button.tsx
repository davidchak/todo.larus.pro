import React from "react";
import styles from "./Button.module.scss";
import { SizeEnum } from "../styles.constant";
import cn from 'classnames';

type ButtonPropsType = {
	text: string;
	action: (props: any) => void;
	size?: SizeEnum;
	withBorder?: boolean;
	withBackground?: boolean;
	fullWidth?: boolean;
}

export const Button = ({
	text,
	action,
	size = SizeEnum.md,
	withBorder = false,
	withBackground = false,
	fullWidth = false,
}: ButtonPropsType) => {
	const [mouseOver, setMouseOver] = React.useState<boolean>(false);

	const ButtonStyles = cn(
		styles.button,
		withBorder && styles.button_border,
		withBackground && styles.button_background,
		fullWidth && styles["button_full-width"],
		size == SizeEnum.sm && styles["button_size-sm"],
		size == SizeEnum.md && styles["button_size-md"],
		size == SizeEnum.lg && styles["button_size-lg"],
		() => {
			if (mouseOver && !withBorder && !withBackground) {
				return null
			}
			if (mouseOver && withBorder && withBackground) {
				return styles['button_background-active']
			}
			if (mouseOver && withBorder && !withBackground) {
				return styles['button_border-active']
			}
			if (mouseOver && !withBorder && withBackground) {
				return styles['button_background-active']
			}
		}
	)

	const onMouseOver = (ev: React.MouseEvent) => {
		setMouseOver(true)
	}

	const onMouseOut = (ev: React.MouseEvent) => {
		setMouseOver(false)
	}

	return <button
		className={ButtonStyles}
		onMouseOver={onMouseOver}
		onMouseOut={onMouseOut}
		onClick={action}
	>{text}</button>
}