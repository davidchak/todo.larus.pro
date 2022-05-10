import React, { useEffect, useRef } from "react";

export default function useScroll(
	parentRef: React.RefObject<HTMLDivElement>,
	childRef: React.RefObject<HTMLDivElement>,
	callback: () => void
) {
	const observer = useRef<IntersectionObserver>();

	useEffect(() => {
		const options = {
			root: parentRef.current,
			rootMargin: '0px',
			threshol: 0
		};

		observer.current = new IntersectionObserver(([target]) => {
			if (target.isIntersecting) {
				callback()
			}
		}, options)

		observer.current.observe(childRef.current as Element);

		return function () {
			if (observer.current) {
				observer.current.unobserve(childRef.current as Element);
			}
		}
	}, [callback])
}