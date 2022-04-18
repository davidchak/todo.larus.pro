import React from 'react';
import { InputPropsTypes } from './Input.types';
import styles from './Input.module.css';

export const Input = ({ placeholder, onChange, value }: InputPropsTypes) => {
	return <input className={styles.input} type='text' placeholder={placeholder} onChange={(ev) => onChange(ev.target.value)} value={value}></input>
}