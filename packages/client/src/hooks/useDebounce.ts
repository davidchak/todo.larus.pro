import React, { useCallback, useRef } from "react";

export function useDebounce(callback: (...args: any[]) => void, delay: number) {
	const timer = useRef<NodeJS.Timeout>();

	const debouncedCallback = useCallback((...args: any[]) => {
		if (timer.current) {
			clearInterval(timer.current);
		}

		timer.current = setInterval(() => {
			callback(...args)
		}, delay)

	}, [callback, delay])

	return debouncedCallback;
}