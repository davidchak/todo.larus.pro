import React, { useEffect, useState } from "react"

export default function useHover(ref: React.RefObject<HTMLDivElement>) {
	const [isHovering, setHover] = useState<boolean>(false);

	const on = () => { setHover(true) };
	const off = () => { setHover(false) };

	useEffect(() => {
		if (!ref.current) {
			return;
		}

		const node = ref.current;

		node.addEventListener('mouseenter', on);
		node.addEventListener('mousemove', on);
		node.addEventListener('mouselive', off);

		return function () {
			node.removeEventListener('mouseenter', on);
			node.removeEventListener('mousemove', on);
			node.removeEventListener('mouselive', off);
		}
	}, [])

	return isHovering;

}