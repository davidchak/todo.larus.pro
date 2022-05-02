import React from 'react';
import { InputPropsTypes } from './Input.types';
import styles from './Input.module.css';
import cn from 'classnames';

export const Input = ({ placeholder, onChange, value }: InputPropsTypes) => {

	let labelClasses = cn({
		[styles.label]: true
	})

	return <div className={styles.input_field}>
		<input id="input" className={styles.input} type='text' placeholder={placeholder} onChange={(ev) => onChange(ev.target.value)} value={value}></input>
		{<label className={labelClasses} htmlFor="input">Текст</label>}
	</div>
}