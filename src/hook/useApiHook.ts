import { useCallback, useEffect, useState } from "react";

export interface TApiResponse<T> {
    status: Number;
    statusText: String;
    data: T | undefined;
    error: any;
    loading: Boolean;
};

export const useApiGet = <T>(route: string): TApiResponse<T> => {
    const [status, setStatus] = useState<Number>(0);
    const [statusText, setStatusText] = useState<String>('');
    const [data, setData] = useState<T>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<Boolean>(false);

    const getApiData = useCallback(
        async () => {
            setLoading(true);
            try {
                const apiResponse = await fetch(process.env.REACT_APP_BACKEND_API + route);
                const json = await apiResponse.json();
                setStatus(apiResponse.status);
                setStatusText(apiResponse.statusText);
                setData(json);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        }, [route,]
    );

    useEffect(() => {
        getApiData();
    }, [getApiData]);

    return { status, statusText, data, error, loading };
};