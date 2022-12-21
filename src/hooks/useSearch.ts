import { useAuth } from './useAuth';
import { api } from '../lib/axios';
import { useState, useEffect } from 'react';
import { SearchResult } from '../types';

export function useSearch() {
    const { authHeader } = useAuth();
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

    useEffect(() => {
        setIsError(false);

        if (searchTerm.length > 2) {
            setIsLoading(true);
            const search = api.get(`/search/${searchTerm}`, authHeader);

            search.then((res) => {
                setIsLoading(false);
                setSearchResults(res.data.results);
            });
            search.catch((err) => {
                setIsLoading(false);
                setIsError(true);
            });
        } else {
            setSearchResults([]);
        }
    }, [searchTerm]);

    return { searchTerm, setSearchTerm, searchResults, isLoading, isError };
}
