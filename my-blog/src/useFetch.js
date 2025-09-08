import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortOperation = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortOperation.signal})
                .then(res => {
                    if(!res.ok){
                        throw Error('Blogs could not retrieved.');
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data);
                    setError(null);
                    setIsLoading(false);
                })
                .catch((e) =>
                {
                    if(e.name === 'AbortError') {
                        console.log('Fetch operation aborted');
                        return;
                    }
                    setError(e.message);
                    setIsLoading(false);
                });
        }, 1000)

        return (() => abortOperation.abort());
    },[url]);

    return { data, isLoading, error };
}

export default useFetch;