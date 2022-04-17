import React from "react";
import { css, jsx } from "@emotion/react";
import cn from "classnames";


type ButtonPropsType = {
	text: string;
	action: (props: any) => void;
}

export const Button = ({ text, action }: ButtonPropsType) => {
	const buttonStyles = css({
		width: 'max-context',
		height: 'max-context',
		padding: '4px 10px',
		'border-radius': '6px'
	})

	const buttonClass = cn(buttonStyles);

	return <button className="buttonClass" onClick={action} >{text}</button>
}