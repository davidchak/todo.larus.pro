import React from 'react';
import { InputPropsTypes } from './Input.types';


export const Input = ({ placeholder, onChange, value }: InputPropsTypes) => {
	return <input type='text' placeholder={placeholder} onChange={(ev) => onChange(ev.target.value)} value={value}></input>
}