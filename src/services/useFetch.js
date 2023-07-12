import { useEffect, useState } from "react";
import { getToken } from "./auth";

const API = {
    apiV3: 'https://api-ste.smartte.com.mx/V3/'

}

export function useFetch(url, fetchParams = { method: 'GET', mode: 'cors', headers: {Authorization: `Bearer ${getToken().replace('"', '')}`}}) {
    console.log(getToken());
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(API.apiV3 + url, fetchParams)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, []);

    return { data, loading, error};
}