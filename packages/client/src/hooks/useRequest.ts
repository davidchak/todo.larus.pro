import { useEffect, useState } from "react";

export default function useRequest(request: () => Promise<any>) {

	const [data, setData] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		setLoading(false);

		request()
			.then(res => setData(res.data))
			.catch(err => setError(err))
			.finally(() => setLoading(false))
	})

	return [data, loading, error]
}