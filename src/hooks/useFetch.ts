import { useState } from 'react';

export function useFetch(fetchFn: () => Promise<any>, initialValue: any){

	const [isFetching, setIsFetching] = useState<boolean>(false);
	const [error, setError] = useState<{message: string} | null>(null);

	const [fetchedData, setFetchedData] = useState(initialValue);

	async function executeFetch() {
    setIsFetching(true);
			try {
				const data = await fetchFn();
				setFetchedData(data);	
        setError(null);
			} catch(error: any) {

				setError({message: error.message || 'Failed to fetch data.'})
			} finally {
        setIsFetching(false);
      }
  }

	return {
		isFetching,
		error,
		fetchedData,
		setFetchedData,
    executeFetch,
	}
}