import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = <T>(url: string) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios
            .get<T>(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                setError('Error: ' + err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
