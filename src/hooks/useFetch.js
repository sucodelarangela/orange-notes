// hooks
import { useState, useEffect } from "react";

export const useFetch = (url) => {
    // data we receive from the api, initially defined as null
    const [data, setData] = useState(null);
    // states for refactoring post method
    const [config, setConfig] = useState(null); // for headers
    const [method, setMethod] = useState(null); //GET or POST or DELETE
    const [callFetch, setCallFetch] = useState(false);
    // loading state
    const [loading, setLoading] = useState(false);
    // treating errors
    const [error, setError] = useState(null);

    const httpConfig = (data, method) => {
        if (method === 'POST' || method === 'PATCH') {
            setConfig({
                method, // the same as method: "POST" for example
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            });
        } else if (method === 'DELETE') {
            setConfig(
                fetch(data, { method: method })
            );
        }

        setMethod(method);
        // when we setConfig, we activate useEffect to reload the list.
    };

    // making requisitions from api
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await fetch(url);

                const json = await res.json();

                // add fetched data to states
                setData(json);
            } catch (error) {
                console.log(error.message);
                setError('Houve um problema ao carregar os dados!');
            }

            setLoading(false);
        };

        fetchData();
    }, [url, callFetch]); // url as dependency array: when this url changes we execute useEffect again. If we add a new data to the system, callFetch reloads the data

    // refactoring POST
    useEffect(() => {
        const httpRequest = async () => {
            if (method === 'POST' || method === 'PATCH' || method === 'DELETE') {
                let fetchOptions = [url, config];

                const res = await fetch(...fetchOptions);

                const json = await res.json();

                setCallFetch(json);
            }
        };

        httpRequest();
    }, [config, method, url]);

    // we are exporting the useFetch hook, but we also need to export the data requested from the api because we will use it in the future. In this case, we use return, because we can only have one export per file:
    return { data, httpConfig, loading, error };
};