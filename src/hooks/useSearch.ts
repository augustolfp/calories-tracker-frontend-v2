import { useAuth } from './useAuth';
import { api } from '../lib/axios';
import { useState, useEffect } from 'react';
import { SearchResult } from '../types';

export function useSearch() {
    const { authHeader } = useAuth();
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [tacoResults, setTacoResults] = useState<SearchResult[]>([]);
    const [favoritesResults, setFavoritesResults] = useState<SearchResult[]>(
        []
    );

    useEffect(() => {
        setIsError(false);

        if (searchTerm.length > 2) {
            setIsLoading(true);
            const search = api.get(`/search/${searchTerm}`, authHeader);

            search.then((res) => {
                setIsLoading(false);
                setTacoResults(res.data.tacoResults);
                setFavoritesResults(res.data.favoriteIngResults);
            });
            search.catch((err) => {
                setIsLoading(false);
                setIsError(true);
            });
        } else {
            setTacoResults([]);
            setFavoritesResults([]);
        }
    }, [searchTerm]);

    return {
        searchTerm,
        setSearchTerm,
        tacoResults,
        favoritesResults,
        isLoading,
        isError,
    };
}
