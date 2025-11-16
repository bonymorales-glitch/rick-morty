import axios from 'axios';
import { useCallback, useState } from 'react';

function useFetch<T>() {
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	const getData = useCallback(async (url: string) => {
        try {
            setLoading(true);
			setError(false);
			const res = await axios.get<T>(url);
			setData(res.data);
		} catch (error) {
			console.error('❌ Error fetching data:', error);
			setError(true);
		} finally {
			setLoading(false);
		}
	}, []);
	return { data, error, loading, getData };
}

export default useFetch;