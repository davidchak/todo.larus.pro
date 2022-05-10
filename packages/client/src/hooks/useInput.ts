import React, { useState } from "react";

export default function useInput(initialValue: string) {

	const [value, setValue] = useState(initialValue);

	const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setValue(ev.target.value)
	}

	return {
		value,
		onChange
	}
}