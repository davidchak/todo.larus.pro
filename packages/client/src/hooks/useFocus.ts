import React, { useEffect, useState } from "react"

export default function useHFocus(ref: React.RefObject<HTMLDivElement>) {
	const [isFocused, setFocus] = useState<boolean>(false);

	const on = () => { setFocus(true) };
	const off = () => { setFocus(false) };

	useEffect(() => {
		if (!ref.current) {
			return;
		}

		const node = ref.current;

		node.addEventListener('focus', on);
		node.addEventListener('blur', off);

		return function () {
			node.removeEventListener('focus', on);
			node.removeEventListener('blur', off);
		}
	}, [])

	return isFocused;

}